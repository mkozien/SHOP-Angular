import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {HttpClient} from "@angular/common/http";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrls: ['./datachange.component.css']
})
export class DatachangeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private restService: RestService) { }

  changePassword(){
    const body: User = new Data ();

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
