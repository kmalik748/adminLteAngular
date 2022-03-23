import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersManagementComponent } from './admin-users-management/admin-users-management.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminUsersManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
