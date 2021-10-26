import {Injectable} from '@angular/core';
import {BasketService} from "./basket.service";

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private login: string

  constructor(private basketService: BasketService) {
    this.login = ""
  }

  loginUser(login: string) {
    this.login = login;
  }

  logOut() {
    this.basketService.clearBasket();
    this.login = "";
  }

  getUserLogin() {
    return this.login;
  }
}
