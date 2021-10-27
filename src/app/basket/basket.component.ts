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
  price: number;

  constructor(private basketService: BasketService) {
    this.items = this.basketService.getProducts();
    this.price = this.countSum();
  }

  countSum() {
    return parseFloat(this.items.map(({price}) => price).reduce((sum, current) => sum + current, 0).toFixed(2));
  }

  removeItem(itemId: number){
    this.basketService.removeProduct(itemId);
    this.items = this.items.filter(item => item.id !== itemId);
    this.price = this.countSum();
  }

  removeAllItems() {
    this.basketService.clearBasket();
    this.items = [];
  }

  ngOnInit(): void {}

}
