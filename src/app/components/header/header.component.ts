import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
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
  isMobileMenuDropDown: boolean = false;
  isMobileMenuAccount: boolean = false;
  isMobileNavbar: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target) && this.isLogin) {
      this.isLogin = false;
    }
  }

  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private router: Router,
    private eRef: ElementRef
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
}
