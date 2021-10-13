import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../rest.service";


@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {

  @Input()
  userType: string;

  constructor(
    private http: HttpClient,
    private restService: RestService) {
    this.userType = "";
  }



  ngOnInit(): void {
  }
}
