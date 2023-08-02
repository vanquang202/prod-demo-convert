import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagerRoutingModule { }
