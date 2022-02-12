import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { ProductInBasket } from '../../models/product-in-basket';
import { UserSessionService } from 'src/app/services/userSession.service';

@Component({
  selector: 'app-small-basket',
  templateUrl: './small-basket.component.html',
  styleUrls: ['./small-basket.component.css']
})
export class SmallBasketComponent implements OnInit, OnChanges {
  @Input() itemsAdded: number = 0;
  items: ProductInBasket[] = this.basketService.items;
  sumPrice: number | undefined = 0;
  userType = '';
  userLogin = '';

  constructor(private basketService: BasketService,
    private userSession: UserSessionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.getBasket()
    console.log(this.itemsAdded)
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

