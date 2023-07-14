import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    OrderReceivedComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    FormsModule
  ]
})
export class CartPageModule { }
