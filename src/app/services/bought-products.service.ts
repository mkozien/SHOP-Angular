import { Injectable } from '@angular/core';
import { ProductInBasket } from '../models/product-in-basket';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BoughtProductsService {
  productsFromBasket: ProductInBasket[] = [];
  boughtProducts: number[] = [];
  userLogged: string = localStorage.getItem('userLogged') || '{}';

  constructor(private restService: RestService) {}

  savePurchase(basket: ProductInBasket[]) {
    this.productsFromBasket = basket;

    for (var i = 0; i < this.productsFromBasket.length; i++) {
      for (var j = 0; j < this.productsFromBasket[i].quantity; j++) {
        console.log(j + 1 + "/" + this.productsFromBasket[i].quantity + this.productsFromBasket[i].product);
        this.boughtProducts.push(this.productsFromBasket[i].product.id);
      }
      console.log(this.productsFromBasket[i]);
    }
    console.log(this.boughtProducts);

    this.userLogged = this.userLogged.split('"').join('');
    console.log(this.userLogged)
    
    this.restService.postURL(`sale/new/${this.userLogged}`, this.boughtProducts)
    .subscribe(res => {
      if (res.status == "200") {
        alert("Produkty zostały zakupione!");
      }
    })

    this.productsFromBasket = [];
    this.boughtProducts = [];
  }

}
