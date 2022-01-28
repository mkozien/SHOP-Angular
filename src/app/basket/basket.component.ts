import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { BasketService } from '../services/basket.service';
import { ProductInBasket } from '../models/product-in-basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  items: ProductInBasket[];
  // price: number;

  constructor(private basketService: BasketService) {
    this.items = this.basketService.getProducts();

    // this.price = this.countSum();
  }

  getBasket() {
    this.items = this.basketService.getProducts();
  }

  incrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.incrementProduct(productId);
    this.getBasket();
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  decrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.decrementProduct(productId);
    this.getBasket();
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  // countSum() {
  //
  // }
  //
  // removeItem(itemId: number){
  //   this.price = this.countSum();
  // }
  //
  // removeAllItems() {
  //   this.basketService.clearBasket();
  //   this.items = [];
  // }

  ngOnInit() {}
}
