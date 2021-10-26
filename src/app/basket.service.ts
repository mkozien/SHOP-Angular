import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  items: Product[] = [];

  addProduct(product: Product){
    this.items.push(product)
  }

  getProducts() {
    return this.items;
  }

  clearBasket(){
    this.items = [];
    return this.items;
  }
}
