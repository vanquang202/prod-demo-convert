import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  googleSubscription: any;
  token: any;
  isFirstFailed: boolean = false;
  isViewPassword: boolean = false;
  isViewConfirmPassword: boolean = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    if (!this.authS.getItem('user')) this.socialAuthService.signOut();
    this.googleSubscription = this.socialAuthService.authState.subscribe((user: any) => {
      if (user) {
        this.authS.saveItem('user', user);
        this.authS.sendEvent('loading-page', { status: true });
        setTimeout(() => {
          this.authS.sendEvent('loading-page', { status: false });
          this.router.navigate([""]);
        }, 5000);
      }
    });
  }

  ngOnDestroy() {
    this.googleSubscription.unsubscribe();
  }
}
