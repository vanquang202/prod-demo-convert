import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaRoutingModule } from './mya-routing.module';
import { MyaLayoutComponent } from './mya-layout/mya-layout.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';


@NgModule({
  declarations: [
    MyaLayoutComponent,
    ServiceComponent,
    ServiceDetailComponent,
  ],
  imports: [
    CommonModule,
    MyaRoutingModule
  ]
})
export class MyaModule { }
