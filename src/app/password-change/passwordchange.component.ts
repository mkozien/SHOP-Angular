import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from "../services/rest.service";
import {UserSessionService} from "../services/userSession.service";
import {User} from "../models/user";

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordChangeComponent implements OnInit {

  login: string
  @Input()
  password: string;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private userSession: UserSessionService) {
    this.login = "";
    this.password = "";
  }

  changePassword(){
    const body: User = new User (this.userSession.getUserLogin(), this.password);

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
