import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { ConvertPdfComponent } from './convert-pdf/convert-pdf.component';
import { FormatComponent } from './format/format.component';
import { OcrComponent } from './ocr/ocr.component';
import { PricingComponent } from './pricing/pricing.component';
import { SecurityComponent } from './security/security.component';
import { SupportComponent } from './support/support.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ComponentsModule } from '../_components/components.module';
import { HistoryConvertComponent } from './history-convert/history-convert.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ConvertImgComponent,
    ConvertPdfComponent,
    FormatComponent,
    OcrComponent,
    PricingComponent,
    SecurityComponent,
    SupportComponent,
    TrangChuComponent,
    HistoryConvertComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
