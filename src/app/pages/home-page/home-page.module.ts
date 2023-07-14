import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { ConvertPdfComponent } from './convert-pdf/convert-pdf.component';
import { FormatComponent } from './format/format.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { PricingComponent } from './pricing/pricing.component';
import { SecurityComponent } from './security/security.component';
import { SupportComponent } from './support/support.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { OcrComponent } from './ocr/ocr.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    ConvertImgComponent,
    ConvertPdfComponent,
    FormatComponent,
    OrderReceivedComponent,
    PricingComponent,
    SecurityComponent,
    SupportComponent,
    TrangChuComponent,
    OcrComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    GoogleSigninButtonModule,
    ComponentsModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
