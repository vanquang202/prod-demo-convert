import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  tab: number = 1;
  objService: any = [];
  constructor(
    private authS: AuthService
  ) { }
  ngOnInit(): void {
    this.objService = this.authS.getItem('cart');
  }
}
