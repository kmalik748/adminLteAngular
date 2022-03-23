import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutPageComponent } from './layouts/auth-layout-page/auth-layout-page.component';
import { DashboardLayoutPageComponent } from './layouts/dashboard-layout-page/dashboard-layout-page.component';
import {SharedPagesModule} from "./shared-pages/shared-pages.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutPageComponent,
    DashboardLayoutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
