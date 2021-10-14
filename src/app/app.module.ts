import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import {PasswordChangeComponent} from "./password-change/passwordchange.component";
import { DataChangeComponent } from './datachange/datachange.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    ShopMainComponent,
    CustomerMainComponent,
    PasswordChangeComponent,
    DataChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
