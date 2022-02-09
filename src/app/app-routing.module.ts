import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { ShopMainComponent } from "./shop-main/shop-main.component";
import { CustomerMainComponent } from "./customer-main/customer-main.component";
import { CustomerHistoryComponent } from "./customer-history/customer-history.component";
import {PasswordChangeComponent} from "./password-change/passwordchange.component";
import {DataChangeComponent} from "./datachange/datachange.component";
import {BasketComponent} from "./basket/basket.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'shop', component: ShopMainComponent},
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
