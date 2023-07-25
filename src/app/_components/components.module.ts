import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert/convert.component';
import { FooterComponent } from './footer/footer.component';
import { FooterDocumentComponent } from './footer-document/footer-document.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDocumentComponent } from './header-document/header-document.component';
import { TypeFileComponent } from './type-file/type-file.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { CaptchaComponent } from './captcha/captcha.component';

@NgModule({
  declarations: [
    ConvertComponent,
    HeaderComponent,
    FooterComponent,
    FooterDocumentComponent,
    HeaderDocumentComponent,
    TypeFileComponent,
    LoadingPageComponent,
    CaptchaComponent
  ],
  exports: [
    ConvertComponent,
    HeaderComponent,
    FooterComponent,
    FooterDocumentComponent,
    HeaderDocumentComponent,
    TypeFileComponent,
    LoadingPageComponent,
    CaptchaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GoogleSigninButtonModule,
    RecaptchaV3Module,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class ComponentsModule { }
