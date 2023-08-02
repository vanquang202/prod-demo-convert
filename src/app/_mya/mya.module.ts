import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaRoutingModule } from './mya-routing.module';
import { MyaLayoutComponent } from './mya-layout/mya-layout.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ReceivedComponent } from './received/received.component';
import { HistoryConvertComponent } from './history-convert/history-convert.component';

@NgModule({
  declarations: [
    MyaLayoutComponent,
    ServiceComponent,
    ServiceDetailComponent,
    ReceivedComponent,
    HistoryConvertComponent
  ],
  imports: [
    CommonModule,
    MyaRoutingModule
  ]
})
export class MyaModule { }
