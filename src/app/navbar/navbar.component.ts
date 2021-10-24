import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserSessionService} from "../userSession.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login: string;

  constructor(
    private router: Router,
    private userSession: UserSessionService) {
    this.login = this.userSession.getUserLogin();
  }

  logOff(){
    this.userSession.logOut();
    this.router.navigate(['../login']);
  }

  ngOnInit(): void {
  }

}
