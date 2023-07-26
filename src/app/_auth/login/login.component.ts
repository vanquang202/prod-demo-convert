import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
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

  obj: any = {};
  objError: any = {};

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

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: any) => {
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

  validate() {
    this.objError = {};
    let flagValidate = true;
    if (!this.obj.email) {
      flagValidate = false;
      this.objError.email = "(Chưa nhập trường này)";
    }
    if (!this.obj.password) {
      flagValidate = false;
      this.objError.password = "(Chưa nhập trường này)";
    }
    return flagValidate;
  }

  login() {
    this.isFirstFailed = true;
    if (!this.validate()) return;
  }

  ngOnDestroy() {
    this.googleSubscription.unsubscribe();
  }
}
