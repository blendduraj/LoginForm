
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../add-products-dialog/add-products-dialog.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { Product } from 'src/models/product.model';
// import { AddProductDialogComponent } from '../add-products-dialog/add-products-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsPageComponent {
  public products: Product[] = [
    { id:1,name: 'Product 1', category: 1, price: 19.99, date: new Date() },
    { id:2,name: 'Product 2', category: 2, price: 29.99, date: new Date() },
  ];

  constructor(private dialog: MatDialog) {}

  openAddProductForm(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.products.push(result);
      } else {
      }
    });
  }

  protected getCategoryName(product: Product):string
  {
    return `Category ${product.category}`;
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent,{
      width: '640px',
      disableClose: true,
      data: {product:product}
    });

    dialogRef.afterClosed().subscribe((result: Product | null) => {
      if (result) {
       let products = this.products.filter(x => x.id != result.id);
       this.products = [...products, result].sort((a,b) => a.id > b.id ? 1 : -1);
      }
    });
  }

  deleteProduct(product: Product): void {
    this.dialog.open(DialogConfirmComponent,{
      width: '640px',
      disableClose: true,
      data: {message:'Are you sure that you want to delete this product?'}
    }).afterClosed().subscribe((x:boolean)=>{
    if(x)
    {
      this.products = this.products.filter(x=> x.id != product.id);
    }
    });
  }
}
