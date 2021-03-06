import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { ShopMainComponent } from "./shop-page/shop-main/shop-main.component";
import { CustomerMainComponent } from "./customer-page/customer-main/customer-main.component";
import { CustomerHistoryComponent } from "./customer-page/customer-history/customer-history.component";
import { PasswordChangeComponent } from "./password-change/passwordchange.component";
import { DataChangeComponent } from "./datachange/datachange.component";
import { BasketComponent } from "./customer-page/basket/basket.component";
import { AddProductComponent } from './shop-page/add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'shop', component: ShopMainComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'customerhistory', component: CustomerHistoryComponent},
  {path: 'passwordchange', component: PasswordChangeComponent},
  {path: 'datachange', component: DataChangeComponent},
  {path: 'customer', component: CustomerMainComponent},
  {path: 'basket', component: BasketComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
