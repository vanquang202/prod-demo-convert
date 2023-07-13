import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.css']
})
export class OrderReceivedComponent implements OnInit {

  objCart: any = {};

  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!(this.objCart = this.authS.getItem("cart"))) this.router.navigate(["/pricing"]);
  }

  onClipBoard(value: string) {
    navigator.clipboard.writeText(value);
  }

  avtPrice() {
    return (this.objCart.price * (this.objCart.vat / 100));
  }
  totalPrice() {
    return (this.objCart.price + this.avtPrice()) * this.objCart.typePayment;
  }

}
