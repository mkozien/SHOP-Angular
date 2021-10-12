export class User {
  login: string;
  password: string;
  address: string;
  mail: string;
  phone: string;
  name: string;
  userType: string;

  constructor (login: string, password: string, address: string, mail: string, phone: string, name: string, userType: string) {
    this.login = login;
    this.password = password;
    this.address = address;
    this.mail = mail;
    this.phone = phone;
    this.name = name;
    this.userType = userType
  }
}
