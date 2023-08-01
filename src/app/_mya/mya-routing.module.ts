import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaLayoutComponent } from './mya-layout/mya-layout.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ReceivedComponent } from './received/received.component';

const routes: Routes = [
  {
    path: "mya",
    component: MyaLayoutComponent,
    children: [
      {
        path: "service",
        component: ServiceComponent
      },
      {
        path: "received",
        component: ReceivedComponent
      },
      {
        path: "service-detail",
        component: ServiceDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaRoutingModule { }
