import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = {};
  isLogin: boolean = false;
  isMobile: boolean = false;
  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authS.getItem('user');
    this.socialAuthService.authState.subscribe((user: any) => {
      this.authS.saveItem('user', user);
      this.user = user;
    });
  }

  logOut() {
    this.authS.removeItem('user');
    this.user = null;
    this.router.navigate(["/register"]);
  }

  openMoBile() {
    document.getElementById("navbar")?.classList.toggle("navbar-mobile");
    document.querySelector(".mobile-nav-toggle")?.classList.toggle("bi-list");
    document.querySelector(".mobile-nav-toggle")?.classList.toggle("bi-x");
  }
}
