import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  token: any;

  isFirstFailed: boolean = false;
  isViewPassword: boolean = false;
  isViewConfirmPassword: boolean = false;

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
    if (!this.obj.confirm_password) {
      flagValidate = false;
      this.objError.confirm_password = "(Chưa nhập trường này)";
    } else if (this.obj.confirm_password != this.obj.password) {
      flagValidate = false;
      this.objError.confirm_password = "(Mật khẩu không khớp)";
    }
    return flagValidate;
  }

  register() {
    this.isFirstFailed = true;
    if (!this.validate()) return;
  }

  ngOnDestroy() {
  }
}
