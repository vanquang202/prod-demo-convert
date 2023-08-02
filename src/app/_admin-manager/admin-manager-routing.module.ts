import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: "admin-manager",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          title: "Trang quản trị "
        }
      },
      {
        path: "customer",
        component: CustomerComponent,
        data: {
          title: "Người dùng  "
        }
      },
      {
        path: "report",
        component: ReportComponent,
        data: {
          title: "Báo cáo  "
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagerRoutingModule { }
