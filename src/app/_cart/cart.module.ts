import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../_components/components.module';


@NgModule({
  declarations: [
    CartLayoutComponent,
    CheckoutComponent,
    OrderReceivedComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class CartModule { }
