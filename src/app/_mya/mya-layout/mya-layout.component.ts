import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mya-layout',
  templateUrl: './mya-layout.component.html',
  styleUrls: ['./mya-layout.component.css']
})
export class MyaLayoutComponent implements OnInit {
  isHideTabLeft: boolean = false;
  isMobile: boolean = false;
  user: any;
  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authS.getItem('user');
  }

  onClickRouterLink() {
    this.isMobile = false;
  }

  logOut() {
    this.authS.removeItem('user');
    this.user = null;

    this.router.navigate(["/register"]);
  }
}
