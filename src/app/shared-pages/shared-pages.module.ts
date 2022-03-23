import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import {AdminRoutingModule} from "../admin/admin-routing.module";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    FooterComponent
  ],
  exports: [
    FooterComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class SharedPagesModule { }
