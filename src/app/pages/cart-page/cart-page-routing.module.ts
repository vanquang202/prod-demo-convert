import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartLayoutComponent } from 'src/app/layouts/cart-layout/cart-layout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderReceivedComponent } from './order-received/order-received.component';

const routes: Routes = [
  {
    path: "cart",
    component: CartLayoutComponent,
    children: [
      {
        path: "checkout",
        component: CheckoutComponent,
        data: { title: "Thông tin thanh toán " }
      },
      {
        path: "order-received/:id",
        component: OrderReceivedComponent,
        data: { title: "Thanh toán " }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule { }
