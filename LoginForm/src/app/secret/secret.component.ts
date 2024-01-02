import { WeatherClient } from './../clients/weather.client';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  public products: Product[] = [
    // your array of products
    { id:1, name: 'Product 1', category: 1, price: 19.99, date: new Date()  },
    { id:2,name: 'Product 2', category: 2, price: 29.99, date: new Date()  },
  ];
  public weather: Observable<any> = this.weatherClient.getWeatherData();
  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient
  ) {}


  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }

  onProductClick(product: Product): void {
    // Handle the click event for a specific product
  }
}
