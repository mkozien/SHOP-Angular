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
  items: ProductInBasket[] = [];
  // price: number;

  constructor(private basketService: BasketService) {
    // this.items = this.basketService.getProducts();
    // this.price = this.countSum();
  }

  getBasket() {
    this.items = this.basketService.getProducts();
    console.log(this.items.length)
  }

  incrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.incrementProduct(productId);
    this.getBasket();
  }

  decrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.decrementProduct(productId);
    this.getBasket();
  }

  // countSum() {
  //
  // }
  //
  removeItem(productId: number) {
    this.basketService.removeProduct(productId);
    this.getBasket();
  }
  //
  removeAllItems() {
    this.basketService.clearBasket();
    console.log(this.items)
    this.getBasket();
  }

  ngOnInit() {
    this.items = this.basketService.autoGetProducts();
    console.log(this.items)
  }
}
