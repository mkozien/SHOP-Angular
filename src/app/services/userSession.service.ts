import { Injectable } from '@angular/core';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private login: string;

  constructor(private basketService: BasketService) {
    this.login = '';
  }

  loginUser(login: string) {
    this.login = login;
    localStorage.setItem('userLogged', JSON.stringify(login));
  }

  autoLogin() {
    const login = JSON.parse(localStorage.getItem('userLogged') || '{}');
    if (!login) {
      return;
    } else {
      this.login = login;
    }


  }

  logOut() {
    // this.basketService.clearBasket();
    this.login = '';
    localStorage.clear();
  }

  getUserLogin() {
    return this.login;
  }

}
