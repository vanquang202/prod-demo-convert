import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  @Input() token: any;
  @Output() tokenChange: any = new EventEmitter;

  set _token(value: any) {
    this.token = value;
    this.tokenChange.emit(this.token);
  }
}
