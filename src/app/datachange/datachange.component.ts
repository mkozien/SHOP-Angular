import { Component, Input, OnInit } from '@angular/core';
import {Data} from './data'
import {HttpClient} from "@angular/common/http";
import {RestService} from "../rest.service";
import {UserSessionService} from "../userSession.service";

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrls: ['./datachange.component.css']
})
export class DataChangeComponent implements OnInit {

  login: string;
  @Input()
  address: string;
  @Input()
  mail: string;
  @Input()
  phone: string;
  @Input()
  name: string;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private userSession: UserSessionService) {
    this.login = "";
    this.address = "";
    this.mail = "";
    this.phone = "";
    this.name = ""
  }

  changeData() {
    const body: Data = new Data (this.userSession.getUserLogin(), this.address, this.mail, this.phone, this.name);

    this.restService.postURL(`user/update`, body)
      .subscribe(res => {
        if (res.status == "200") {
          alert("Dane zostały zmienione!");
        }
        else {
          alert("Wystąpił błąd! Proszę spróbować ponownie później!");
        }
      })
  }

  ngOnInit(): void {
  }

}
