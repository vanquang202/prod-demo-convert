import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  googleSubscription: any;
  token: any;
  isFirstFailed: boolean = false;
  isViewPassword: boolean = false;

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
