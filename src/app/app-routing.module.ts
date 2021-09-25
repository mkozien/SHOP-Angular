import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { ShopMainComponent } from "./shop-main/shop-main.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'shop', component: ShopMainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
