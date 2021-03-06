import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { ProductInBasket } from '../../models/product-in-basket';
import { UserSessionService } from 'src/app/services/userSession.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  items: ProductInBasket[] = [];
  sumPrice: number | undefined = 0;
  userType = '';
  userLogin = '';

  constructor(private basketService: BasketService,
    private userSession: UserSessionService) {
    this.sumPrice = this.basketService.countTotalPrice();
  }

  getBasket() {
    this.items = this.basketService.getProducts();
    console.log(this.items.length);
    console.log(this.basketService.countTotalPrice());
    this.sumPrice = this.basketService.countTotalPrice();
  }

  incrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.incrementProduct(productId);
    this.getBasket();
  }

  decrementQuantity(productId: number) {
    localStorage.removeItem('products');
    this.basketService.decrementProduct(productId);
    this.getBasket();
  }

  removeItem(productId: number) {
    this.basketService.removeProduct(productId);
    this.getBasket();
  }
  //
  removeAllItems() {
    this.basketService.clearBasket();
    console.log(this.items);
    this.getBasket();
  }

  buyItems() {
    this.basketService.buyProducts();
    this.items = [];
    localStorage.removeItem('products');
  }

  ngOnInit() {
    this.items = this.basketService.autoGetProducts();
    console.log(this.items);
    console.log(this.items.length);
    console.log(this.basketService.countTotalPrice());
    this.sumPrice = this.basketService.countTotalPrice();

    this.userSession.autoLogin();
    this.userSession.autoGetUserType();
    this.userLogin = this.userSession.getUserLogin();
    this.userType = this.userSession.getUserType();
  }
}
