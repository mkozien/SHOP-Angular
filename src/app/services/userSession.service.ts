import { Injectable } from '@angular/core';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private login: string;
  private userType: string;

  constructor(private basketService: BasketService) {
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

}
