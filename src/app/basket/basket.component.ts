import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {BasketService} from "../basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items: Product[] = [];

  constructor(private basketService: BasketService) {
    this.items = this.basketService.getProducts()
  }

  removeItem(itemId: number){
    this.basketService.removeProduct(itemId);
    this.items = this.items.filter(item => item.id !== itemId);
  }

  removeAllItems() {
    this.basketService.clearBasket();
    this.items = [];
  }

  ngOnInit(): void {}

}
