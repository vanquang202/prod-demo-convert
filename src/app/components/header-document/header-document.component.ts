import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-document',
  templateUrl: './header-document.component.html',
  styleUrls: ['./header-document.component.css']
})
export class HeaderDocumentComponent implements OnInit {
  isLogin: boolean = false;
  user: any;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target) && this.isLogin) {
      this.isLogin = false;
    }
  }

  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private eRef: ElementRef
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
