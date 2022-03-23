import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminUsersManagementComponent} from "./admin-users-management/admin-users-management.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: "full"},
  {path: 'dashboard', component: AdminHomeComponent},
  {path: 'users-management', component: AdminUsersManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
