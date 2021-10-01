import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  private loginUrl = 'http://localhost:8080/user/register'

  constructor(
    private http: HttpClient,
    private router: Router) {
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
    let myBody = {
      "login": this.login,
      "password": this.password,
      "address": this.address,
      "mail": this.mail,
      "phone": this.phone,
      "name": this.name,
      "userType": this.userType
    }
    console.log(myBody)
    this.http.post(this.loginUrl, myBody,
      {responseType: 'text'}
    )
      .subscribe(
        event => {
          let dataMessage = JSON.parse(event);
          if (dataMessage.status == "200") {
            alert("Rejestracja przebiegła pomyślnie!");
            this.router.navigate(['../login']);
          }
          else {
            this.incorrectData = "Niepoprawne dane";
          }
        })
  }

  ngOnInit(): void {
  }

}
