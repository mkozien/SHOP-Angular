import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BasketService } from '../services/basket.service';
import { UserSessionService } from "../services/userSession.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName = '';

  constructor(
    private router: Router,
    private userSession: UserSessionService,
    private basketService: BasketService) {
  }

  logOff(){
    this.userSession.logOut();
    this.router.navigate(['../login']);
  }

  ngOnInit() {
    this.userSession.autoLogin();
    this.userName = this.userSession.getUserLogin();
    // this.basketService.autoGetProducts();
  }

}
