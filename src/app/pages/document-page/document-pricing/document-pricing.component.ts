import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-document-pricing',
  templateUrl: './document-pricing.component.html',
  styleUrls: ['./document-pricing.component.css']
})
export class DocumentPricingComponent {

  dsObjPricing: any = [
    {
      id: 1,
      name: "Admin Cheap",
      price: 599000,
      vat: 10,
      options: [
        {
          name: "500 MB Kích thước file tối đa",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: "25 chuyển đổi đồng thờ",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: " Mức độ ưu tiên cao",
          icon: "fa-solid fa-check text-hm"
        },
      ]
    },
    {
      id: 2,
      name: "Admin Premium",
      price: 1599000,
      vat: 10,
      options: [
        {
          name: "1GB Kích thước file tối đa",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: "50 chuyển đổi đồng thời",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: " Mức độ ưu tiên cao",
          icon: "fa-solid fa-check text-hm"
        },
      ]
    },
    {
      id: 3,
      name: "Admin Business",
      price: 1999000,
      vat: 10,
      options: [
        {
          name: "Không giới hạn kích thước file tối đa",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: "Không giới hạn chuyển đổi đồng thời",
          icon: "fa-solid fa-check text-hm"
        },
        {
          name: " Mức độ ưu tiên cao nhất",
          icon: "fa-solid fa-check text-hm"
        },
      ]
    }
  ];

  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  registerItem(item: any) {
    this.authS.saveItem("cart", item);
    this.router.navigate(["/cart/checkout"])
  }

}
