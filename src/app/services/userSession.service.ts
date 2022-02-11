import { Injectable } from '@angular/core';
import { BasketService } from './basket.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private login: string;
  private userType: string;

  constructor(private basketService: BasketService,
    private restService: RestService) {
    this.login = '';
    this.userType = '';
  }

  loginUser(login: string, userType: string) {
    this.login = login;
    this.userType = userType;
    localStorage.setItem('userLogged', JSON.stringify(login));
    localStorage.setItem('userTypeLogged', JSON.stringify(userType));
  }

  autoLogin() {
    const login = JSON.parse(localStorage.getItem('userLogged') || '{}');
    if (login) {
      return this.login = login;
    }
  }

  autoGetUserType() {
    const userType = JSON.parse(localStorage.getItem('userTypeLogged') || '{}');
    if (userType) {
      return this.userType = userType;
    }
  }

  logOut() {
    this.login = '';
    this.basketService.clearBasket();
    localStorage.clear();
  }

  getUserLogin() {
    return this.login;
  }

  getUserType() {
    return this.userType;
  }

  // getUserData() {
  //   this.restService.getURL(`user/data/`;

  // }

}
