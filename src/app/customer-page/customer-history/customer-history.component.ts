import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { UserSessionService } from '../../services/userSession.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css'],
})
export class CustomerHistoryComponent implements OnInit {
  products: Product[] = [];
  userType = '';
  userLogin = '';

  constructor(
    private restService: RestService,
    private userSession: UserSessionService
  ) {}

  ngOnInit(): void {

    this.userSession.autoLogin();
    this.userSession.autoGetUserType();
    this.userLogin = this.userSession.getUserLogin();
    this.userType = this.userSession.getUserType();
    console.log(this.userType);
    console.log(this.userLogin)

    this.restService
      .getURL(`sale/${this.userLogin}`)
      .subscribe((res) => {
        console.log(res)
        if (res.status == '200') {
          console.log(res.message)
          let resParsed = JSON.parse(res.message);
          this.products = resParsed as Product[];
          console.log(this.products)
        }
        console.log(this.products);
      });

  }
}
