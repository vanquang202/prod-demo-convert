import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
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
