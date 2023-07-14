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
  isDoneOrder: boolean = false;

  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!(this.objCart = this.authS.getItem("cart"))) this.router.navigate(["/pricing"]);
    setTimeout(() => {
      this.isDoneOrder = true;
    }, 2000);
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
