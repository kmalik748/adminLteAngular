import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthLayoutPageComponent} from "./layouts/auth-layout-page/auth-layout-page.component";
import {DashboardLayoutPageComponent} from "./layouts/dashboard-layout-page/dashboard-layout-page.component";
import {Error404PageComponent} from "./shared-pages/error404-page/error404-page.component";

const routes:Routes = [
  {path: '', redirectTo: 'auth', pathMatch: "full"},
  {
    path: 'auth',
    component: AuthLayoutPageComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: DashboardLayoutPageComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  { path: '**', component: Error404PageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload",
      enableTracing: false,
      scrollPositionRestoration: "enabled"
    }),
    CommonModule
  ]
})
export class AppRoutingModule { }
