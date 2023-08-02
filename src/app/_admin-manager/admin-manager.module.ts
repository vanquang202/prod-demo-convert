import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagerRoutingModule } from './admin-manager-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    CustomerComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    AdminManagerRoutingModule
  ]
})
export class AdminManagerModule { }
