import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../rest.service";
import {UserSessionService} from "../userSession.service";
import {Product} from "./product";


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
    private userSession: UserSessionService) {}

  ngOnInit(): void {

    this.restService.getURL(`user/products/${this.userSession.getUserLogin()}`)
      .subscribe(res => {
        console.log(res);
        console.log(res.status)
        console.log(typeof res.status)
        if (res.status == "200") {
          console.log(res.message);
          let resParsed = JSON.parse(res.message);
          console.log(resParsed);
          this.products = resParsed as Product[];
          console.log(this.products);
        }
      });
  }
}
