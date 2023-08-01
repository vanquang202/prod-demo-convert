import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  dsObjService: any = [];
  constructor(
    private authS: AuthService
  ) { }
  ngOnInit(): void {
    this.dsObjService.push(this.authS.getItem('cart'));
  }
}
