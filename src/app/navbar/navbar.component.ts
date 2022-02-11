import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserSessionService } from "../services/userSession.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName = '';
  userType = '';

  constructor(
    private router: Router,
    private userSession: UserSessionService) {
  }

  logOff(){
    this.userSession.logOut();
    this.router.navigate(['../login']);
  }

  ngOnInit() {
    console.log(this.userType);
    this.userSession.autoLogin();
    this.userSession.autoGetUserType();
    this.userName = this.userSession.getUserLogin();
    this.userType = this.userSession.getUserType();
    console.log(this.userType);
    // this.basketService.autoGetProducts();
  }

}
