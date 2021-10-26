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

  removeAllItems() {
    this.basketService.clearBasket();
    this.items = [];
  }

  ngOnInit(): void {}

}
