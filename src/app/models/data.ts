export class Data {
  login: string;
  address: string;
  mail: string;
  phone: string;
  name: string;

  constructor (login: string, address: string, mail: string, phone: string, name: string) {
    this.login = login;
    this.address = address;
    this.mail = mail;
    this.phone = phone;
    this.name = name;
  }
}
