import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import {RestService} from "../services/rest.service";
import {User} from "../models/user"
import {UserSessionService} from "../services/userSession.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  incorrectData: string;

  constructor(
    private restService: RestService,
    private router: Router,
    private userSession: UserSessionService) {
    this.incorrectData = ""
  }

    logIn(form: NgForm) {
    const body: User = new User(form.value.login, form.value.password, form.value.userType);

    this.restService.postURL(`user/login/${form.value.userType}`, body)
        .subscribe(res => {
          if (res.message === "OK") {
            this.userSession.loginUser(body.login, form.value.userType);
            if (form.value.userType === "SHOP") {
            this.router.navigate(['../shop']);
          }
            else {this.router.navigate(['../customer'])
            }
          }
          else {
            this.incorrectData = "Niepoprawne dane";
          }
        });
    }

  ngOnInit(): void {

  }
}


