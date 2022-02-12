export class ProductToAdd {
  name: string;
  price: number;
  currency: string;
  type: string;
  shopLogin: string;

  constructor(name: string, price: number, currency: string, type: string, shopLogin: string) {
      this.name = name;
      this.price = price;
      this.currency = currency;
      this.type = type;
      this.shopLogin = shopLogin;
  }
}