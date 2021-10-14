import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { ShopMainComponent } from "./shop-main/shop-main.component";
import { CustomerMainComponent } from "./customer-main/customer-main.component";
import {PasswordChangeComponent} from "./password-change/passwordchange.component";
import {DataChangeComponent} from "./datachange/datachange.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'shop', component: ShopMainComponent},
  {path: 'customer', component: CustomerMainComponent},
  {path: 'passwordchange', component: PasswordChangeComponent},
  {path: 'datachange', component: DataChangeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
