import {Component, Input, Output, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from "../rest-service.service";
import {User} from "./user";

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
  @Output()
  incorrectData: string;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private router: Router) {
    this.login = "";
    this.password = "";
    this.incorrectData = ""
  }

    logIn() {
    const body: User = new User(this.login, this.password);

    this.restService.postURL("/user/login/CUSTOMER", body)
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


