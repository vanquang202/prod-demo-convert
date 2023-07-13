import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  coupon: string = "";
  flagCoupon: boolean = false;

  objCustomer: any = {};
  objError: any = {};
  objCart: any = {};
  objCoupon: any = {};

  dsObjTypePayment: any = [
    {
      id: 1,
      name: "Hàng tháng",
      value: 1,
    },
    {
      id: 2,
      name: "3 tháng ",
      value: 3
    },
    {
      id: 3,
      name: "6 tháng",
      value: 6
    },
    {
      id: 4,
      name: "1 năm",
      value: 12,
    },
    {
      id: 5,
      name: "2 năm",
      value: 24
    },
  ];
  dsObjPayMent: any = [
    {
      id: 1,
      IsSelected: true,
      name: "Chuyển khoản ngân hàng ",
      icon: "fa-solid fa-building-columns"
    },
    {
      id: 2,
      IsDisable: true,
      name: "Thẻ ATM nội địa",
      icon: "fa-solid fa-credit-card"
    },
    {
      id: 3,
      name: "Tiền mặt",
      icon: "fa-solid fa-money-bill"
    },
    {
      id: 4,
      IsDisable: true,
      name: "Paypal",
      icon: "fa-brands fa-cc-paypal"
    },
    {
      id: 5,
      IsDisable: true,
      name: "Credit card",
      icon: "fa-solid fa-credit-card"
    },
    {
      id: 6,
      IsDisable: true,
      name: "Momo",
      icon: "fa-solid fa-building-columns"
    },
  ];

  step: number = 0;

  constructor(
    private router: Router,
    private authS: AuthService
  ) { }

  ngOnInit(): void {
    if (!(this.objCart = this.authS.getItem("cart"))) this.router.navigate(["/pricing"]);
    this.objCart.typePayment = 1;
  }

  onSelectBank(index: number) {
    this.dsObjPayMent.forEach((f: any, i: number) => {
      if (i == index) f.IsSelected = true;
      else f.IsSelected = false;
    });
  }

  validateForm() {
    this.objError = {};
    let flagValidate = true;
    if (!this.objCustomer.first_name || this.objCustomer.first_name.trim() == "") {
      this.objError.first_name = "(Không để trống trường này)";
      flagValidate = false;
    }
    if (!this.objCustomer.last_name || this.objCustomer.last_name.trim() == "") {
      this.objError.last_name = "(Không để trống trường này)";
      flagValidate = false;
    }
    if (!this.objCustomer.phone) {
      this.objError.phone = "(Không để trống trường này)";
      flagValidate = false;
    }
    if (!this.objCustomer.email || this.objCustomer.email.trim() == "") {
      this.objError.email = "(Không để trống trường này)";
      flagValidate = false;
    }
    if (!this.objCart.typePayment) {
      this.objError.typePayment = "(Không để trống trường này)";
      flagValidate = false;
    }
    return flagValidate;
  }

  nextStep() {
    if (this.step == 0) {
      if (!this.validateForm()) return;
      window.scrollTo(0, 0);
      this.step = 1;
    } else if (this.step == 1) {
      this.objCart.Id = Date.now().toString(16) + '0'.repeat(2);
      this.objCart.created_at = Date.now();
      this.objCart.coupon = this.objCoupon;
      this.objCart.customer = this.objCustomer;
      this.objCart.payment = this.dsObjPayMent.find((f: any) => f.IsSelected);
      this.authS.saveItem("cart", this.objCart);
      this.router.navigate(["/order-received", this.objCart.Id]);
    }
  }

  avtPrice() {
    return (this.objCart.price * (this.objCart.vat / 100));
  }
  totalPrice() {
    return (this.objCart.price + this.avtPrice()) * this.objCart.typePayment;
  }

}
