import {Component, Input, Output, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from "../rest.service";
import {User} from "../user"
import {UserSessionService} from "../userSession.service";

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
  userType: string;
  @Output()
  incorrectData: string;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private router: Router,
    private userSession: UserSessionService) {
    this.login = "";
    this.password = "";
    this.userType = "";
    this.incorrectData = ""
  }

    logIn() {
    const body: User = new User(this.login, this.password);

    this.restService.postURL(`user/login/${this.userType}`, body)
        .subscribe(res => {
          if (res.message === "OK") {
            this.userSession.loginUser(body.login);
            if (this.userType === "SHOP") {
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


