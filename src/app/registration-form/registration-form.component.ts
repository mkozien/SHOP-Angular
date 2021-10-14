import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {RestService} from "../rest-service.service";
import {RegisterUser} from "./registeruser";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @Input()
  login: string;
  @Input()
  password: string;
  @Input()
  address: string;
  @Input()
  mail: string;
  @Input()
  phone: string;
  @Input()
  name: string;
  @Input()
  userType: string;
  @Input()
  incorrectData: string

    constructor(
    private http: HttpClient,
    private router: Router,
    private restService: RestService) {
    this.login = "";
    this.password = "";
    this.address = "";
    this.mail = "";
    this.phone = "";
    this.name = "";
    this.userType = "";
    this.incorrectData = ""
  }

  register() {
    const body = new RegisterUser (
      this.login,
      this.password,
      this.address,
      this.mail,
      this.phone,
      this.name,
      this.userType
  )
    this.restService.postURL("/user/register", body)
      .subscribe(res => {
          if (res.status == "200") {
            alert("Rejestracja przebiegła pomyślnie!");
            this.router.navigate(['../login']);
          }
          else {
            this.incorrectData = "Niepoprawne dane";
          }
      });
  }

  ngOnInit(): void {
  }

}
