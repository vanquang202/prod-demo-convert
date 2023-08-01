import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  dsObjReceived: any = [
  ];

  constructor(
    private authS: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.dsObjReceived.push(this.authS.getItem('cart'));
  }

  viewOrderReceived(id: any) {
    this.router.navigate(["/cart/order-received", id]);
  }
}
