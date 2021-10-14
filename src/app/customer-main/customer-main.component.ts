import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../rest.service";
import {UserSessionService} from "../userSession.service";


@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {

    constructor(
    private http: HttpClient,
    private restService: RestService,
    private userSession: UserSessionService) {}

  ngOnInit(): void {

    this.restService.getURL(`user/products/${this.userSession.getUserLogin()}`)
      .subscribe(res => console.log(res));
  }
}
