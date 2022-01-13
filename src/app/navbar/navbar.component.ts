import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserSessionService} from "../services/userSession.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userSession: UserSessionService) {
  }

  logOff(){
    this.userSession.logOut();
    this.router.navigate(['../login']);
  }

  ngOnInit(): void {
  }

}
