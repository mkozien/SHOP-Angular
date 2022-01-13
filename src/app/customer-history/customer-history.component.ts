import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../services/rest.service";
import {UserSessionService} from "../services/userSession.service";
import {Product} from "../models/product";


@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {

  products: Product[] = [];

    constructor(
    private http: HttpClient,
    private restService: RestService,
    private userSession: UserSessionService) {}

  ngOnInit(): void {

    this.restService.getURL(`user/products/${this.userSession.getUserLogin()}`)
      .subscribe(res => {
        if (res.status == "200") {
          let resParsed = JSON.parse(res.message);
          this.products = resParsed as Product[];
        }
      });
  }
}
