import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../services/rest.service";
import {Product} from "../models/product";
import {BasketService} from "../services/basket.service";

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private basketService: BasketService,
    private cdrf: ChangeDetectorRef) {}


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
    this.basketService.addProduct(product);
    this.cdrf.detectChanges();
  }

}
