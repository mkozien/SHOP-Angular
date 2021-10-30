import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {BasketService} from "../basket.service";
import {ProductInBasket} from "./product-in-basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items: ProductInBasket[];
  // price: number;

  constructor(private basketService: BasketService) {
    this.items = basketService.getProducts();



    // this.price = this.countSum();
  }

  getBasket() {
    this.items = this.basketService.getProducts();
  }

    incrementQuantity(productId: number){
      this.basketService.incrementProduct(productId);
      this.getBasket();
    }

    decrementQuantity(productId: number){
      this.basketService.decrementProduct(productId);
      this.getBasket();
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

  ngOnInit(): void {}

}
