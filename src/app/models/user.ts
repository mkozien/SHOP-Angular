export class User {
  login: string;
  password: string;
  userType?: string;

  constructor (login: string, password: string, userType: string) {
    this.login = login;
    this.password = password;
    this.userType = userType;
  }
}
