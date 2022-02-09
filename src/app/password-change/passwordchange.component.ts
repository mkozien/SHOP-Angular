import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RestService } from "../services/rest.service";
import { UserSessionService } from "../services/userSession.service";
import { User } from "../models/user";

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordChangeComponent implements OnInit {
  login: string

  constructor(
    private restService: RestService,
    private userSession: UserSessionService) {
    this.login = "";
  }
  changePassword(form: NgForm){
    const body: User = new User (this.userSession.getUserLogin(), form.value.password, this.userSession.getUserType());

    this.restService.postURL(`user/update/pass`, body)
      .subscribe(res => {
        if (res.status == "200") {
          alert("Hasło zostało zmienione!");
        }
        else {
          alert("Wystąpił błąd! Proszę spróbować ponownie później!");
        }
      })
  }

  ngOnInit(): void {
  }

}
