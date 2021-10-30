import { Injectable } from '@angular/core';
import { Product } from "./product";
import {ProductInBasket} from "./basket/product-in-basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private items: ProductInBasket[] = [];


  addProduct(productInBasket: product, ){
    this.items.push(productInBasket)
  }

  getProducts() {
    return this.items;
  }

  removeProduct(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  clearBasket(){
    this.items = [];
    return this.items;
  }
}
