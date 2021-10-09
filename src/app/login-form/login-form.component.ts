import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {RestService} from "../rest-service.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input()
  login: string;
  @Input()
  password: string;
  @Input()
  incorrectData: string

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private router: Router) {
    this.login = "";
    this.password = "";
    this.incorrectData = ""
  }

    logIn() {
    let myBody = {"login": this.login, "password": this.password}
    this.restService.postURL("/user/login/CUSTOMER", myBody)
        .subscribe(res => {
          if (res.message === "OK") {
            this.router.navigate(['../shop']);
          }
          else {
            this.incorrectData = "Niepoprawne dane";
          }
        });
    }

  ngOnInit(): void {
  }
}


