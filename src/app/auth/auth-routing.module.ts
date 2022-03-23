import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignUpPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
