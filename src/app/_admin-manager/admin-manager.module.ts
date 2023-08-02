import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagerRoutingModule } from './admin-manager-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminManagerRoutingModule
  ]
})
export class AdminManagerModule { }
