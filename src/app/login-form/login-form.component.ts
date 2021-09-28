import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  private loginUrl = 'http://localhost:8080/user/login/CUSTOMER'

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.login = "";
    this.password = ""
  }

    logIn() {
    let myBody = {"login": this.login,
      "password": this.password}
    this.http.post(this.loginUrl, myBody,
      {responseType: 'text'}
    )
      .subscribe(
        event => {
          let dataMessage = JSON.parse(event);
          if (dataMessage.message === "OK") {
            this.router.navigate(['../shop']);
          }
          else {
          }
        });
    }

  ngOnInit(): void {
  }

}
