import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  subscription: any;
  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    if (!this.authS.getItem('user')) this.socialAuthService.signOut();
    this.subscription = this.socialAuthService.authState.subscribe((user: any) => {
      if (user) {
        this.authS.saveItem('user', user);
        this.authS.sendEvent('loading-page', { status: true });
        setTimeout(() => {
          this.authS.sendEvent('loading-page', { status: false });
          this.router.navigate([""]);
        }, 1000);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
