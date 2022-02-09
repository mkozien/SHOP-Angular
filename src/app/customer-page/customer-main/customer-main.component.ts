import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Product} from "../../models/product";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {
  itemsAdded: number = 0;
  products: Product[] = [];

  constructor(
    private restService: RestService,
    // private cdrf: ChangeDetectorRef,
    private basketService: BasketService) {}

  ngOnInit(): void {

    this.restService.getURL(`product/list`)
      .subscribe(res => {
        if (res.status == "200") {
          let resParsed = JSON.parse(res.message);
          this.products = resParsed as Product[];
        }
      });
  }

  addToBasket(product: Product) {
    this.itemsAdded++;
    console.log(this.itemsAdded)
    this.basketService.addProduct(product);
    // this.cdrf.detectChanges();  
    console.log(this.basketService.countTotalPrice());
    // location.reload();
  }

}
