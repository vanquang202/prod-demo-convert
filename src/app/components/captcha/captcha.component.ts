import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {

  _token: any;

  constructor(
    private authS: AuthService
  ) { }

  resolved(captchaResponse: string) {
    this._token = captchaResponse;
  }

  errored(event: any) {
    this._token = null;
  }
}
