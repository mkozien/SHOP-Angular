import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private items: Product[] = [];

  addProduct(product: Product){
    this.items.push(product)
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
