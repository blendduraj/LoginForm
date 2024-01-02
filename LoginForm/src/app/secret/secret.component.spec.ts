import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretComponent } from './secret.component';

describe('SecretComponent', () => {
  let component: SecretComponent;
  let fixture: ComponentFixture<SecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have products defined', () => {
    expect(component.products).toBeDefined();
  });

  it('should log the product when onProductClick is called', () => {
    const product = {name: 'Product 1', category: 'Category 1', price: 19.99, date: new Date() };
    spyOn(console, 'log');

    component.onProductClick(product);

    expect(console.log).toHaveBeenCalledWith('Product clicked:', product);
  });

  it('should log out when logout is called', () => {
    spyOn(console, 'log');

    component.logout();

    expect(console.log).toHaveBeenCalledWith('Logout called');
  });
});
