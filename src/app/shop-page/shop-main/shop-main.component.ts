import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { RestService } from 'src/app/services/rest.service';
import { UserSessionService } from 'src/app/services/userSession.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
  products: Product[] = [];
  userType = '';

  constructor(private restService: RestService,
    private userSession: UserSessionService) { }

  ngOnInit(): void {

    this.restService.getURL(`user/products/${this.userSession.getUserLogin()}`)
      .subscribe(res => {
        if (res.status == "200") {
          let resParsed = JSON.parse(res.message);
          this.products = resParsed as Product[];
        }
      });

      this.userType = this.userSession.getUserType();

  }

}
