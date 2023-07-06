import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-document',
  templateUrl: './header-document.component.html',
  styleUrls: ['./header-document.component.css']
})
export class HeaderDocumentComponent implements OnInit {
  isLogin: boolean = false;
  user: any;
  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authS.getItem('user');
    this.socialAuthService.authState.subscribe((user: any) => {
      this.authS.saveItem('user', user);
      this.user = user;
    });
  }

  openMoBile() {
    document.getElementById("navbar")?.classList.toggle("navbar-mobile");
    document.querySelector(".mobile-nav-toggle")?.classList.toggle("bi-list");
    document.querySelector(".mobile-nav-toggle")?.classList.toggle("bi-x");
  }
}
