import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Product} from "../../models/product";
import {BasketService} from "../../services/basket.service";
import { UserSessionService } from 'src/app/services/userSession.service';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {
  itemsAdded: number = 0;
  products: Product[] = [];
  userType = '';

  constructor(
    private restService: RestService,
    // private cdrf: ChangeDetectorRef,
    private basketService: BasketService,
    private userSession: UserSessionService) {}

  ngOnInit(): void {

    this.restService.getURL(`product/list`)
      .subscribe(res => {
        if (res.status == "200") {
          let resParsed = JSON.parse(res.message);
          this.products = resParsed as Product[];
        }
      });

      this.userType = this.userSession.getUserType();
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
