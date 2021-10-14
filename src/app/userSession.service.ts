import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private login: string

  constructor() {
    this.login = ""
  }

  loginUser(login: string) {
    this.login = login;
  }

  logout() {
    this.login = "";
  }

  getUserLogin() {
    return this.login;
  }
}
