import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { ProductInBasket } from "../models/product-in-basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private items: ProductInBasket[] = [];

  addProduct(product: Product) {
    const index = this.items.findIndex(i => i.product.id === product.id);
    if (index > -1) {
      this.items[index].quantity++;
    } else {
      this.items.push({product, quantity: 1});
    }
    console.log(this.items);
  }

  incrementProduct(productId: number) {
    const index = this.items.findIndex(i => i.product.id === productId);
    this.items[index].quantity++;
  }

  decrementProduct(productId: number) {
    const index = this.items.findIndex(i => i.product.id === productId);
    this.items[index].quantity--;
    if (this.items[index].quantity === 0) {
      this.items.splice(index, 1);
    }
  }

  getProducts() {
    return [...this.items];
  }
  //
  // removeProduct(productId: number) {
  //   this.items = this.items.filter(item => item.id !== productId);
  // }
  //
  // clearBasket(){
  //   this.items = [];
  //   return this.items;
  // }
}
