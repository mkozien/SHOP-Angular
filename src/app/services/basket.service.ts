import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductInBasket } from '../models/product-in-basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  items: ProductInBasket[] = this.getProducts();

  addProduct(product: Product) {
    if (localStorage.getItem('products')) {
      this.items = JSON.parse(localStorage.products);
    }
    const index = this.items.findIndex((i) => i.product.id === product.id);
    if (index > -1) {
      this.items[index].quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    console.log(this.items);
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  incrementProduct(productId: number) {
    const index = this.items.findIndex((i) => i.product.id === productId);
    this.items[index].quantity++;
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  decrementProduct(productId: number) {
    const index = this.items.findIndex((i) => i.product.id === productId);
    this.items[index].quantity--;
    if (this.items[index].quantity === 0) {
      this.items.splice(index, 1);
    }
    localStorage.setItem('products', JSON.stringify(this.items));
    console.log(this.items);
  }

  autoGetProducts() {
    if (localStorage.getItem('products')) {
      const products = JSON.parse(localStorage.getItem('products') || '{}');
      if (products) {
        return this.items = products;
      }
    } else {
      return this.items = [];
    }
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '{}');
    return products;
    // return [...this.items];
  }

  removeProduct(productId: number) {
    const index = this.items.findIndex((i) => i.product.id === productId);
    this.items.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  clearBasket() {
    this.items = [];
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  countTotalPrice() {
    let totalPrice: number = 0;
    for (var i = 0; i < this.items.length; i++) {
      totalPrice += this.items[i].product.price * this.items[i].quantity;
    }
    return totalPrice;
  }
}
