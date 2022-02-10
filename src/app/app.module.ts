import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ShopMainComponent } from './shop-page/shop-main/shop-main.component';
import { CustomerMainComponent } from "./customer-page/customer-main/customer-main.component";
import { CustomerHistoryComponent } from './customer-page/customer-history/customer-history.component';
import { PasswordChangeComponent } from "./password-change/passwordchange.component";
import { DataChangeComponent } from './datachange/datachange.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasketComponent } from './customer-page/basket/basket.component';
import { SmallBasketComponent } from './customer-page/small-basket/small-basket.component';
import { AddProductComponent } from './shop-page/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    ShopMainComponent,
    CustomerMainComponent,
    CustomerHistoryComponent,
    PasswordChangeComponent,
    DataChangeComponent,
    NavbarComponent,
    BasketComponent,
    SmallBasketComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
