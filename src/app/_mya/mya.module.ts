import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaRoutingModule } from './mya-routing.module';
import { ServicesComponent } from './services/services.component';
import { MyaLayoutComponent } from './mya-layout/mya-layout.component';


@NgModule({
  declarations: [
    ServicesComponent,
    MyaLayoutComponent
  ],
  imports: [
    CommonModule,
    MyaRoutingModule
  ]
})
export class MyaModule { }
