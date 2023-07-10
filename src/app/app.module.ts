import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { TrangChuComponent } from './pages/trang-chu/trang-chu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConvertComponent } from './components/convert/convert.component';
import { TypeFileComponent } from './components/type-file/type-file.component';
import { OcrComponent } from './pages/ocr/ocr.component';
import { ConvertPdfComponent } from './pages/convert-pdf/convert-pdf.component';
import { ConvertImgComponent } from './pages/convert-img/convert-img.component';
import { SecurityComponent } from './pages/security/security.component';
import { FormatComponent } from './pages/format/format.component';
import { SupportComponent } from './pages/support/support.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DocumentLayoutComponent } from './layouts/document-layout/document-layout.component';
import { HeaderDocumentComponent } from './components/header-document/header-document.component';
import { FooterDocumentComponent } from './components/footer-document/footer-document.component';
import { DocumentComponent } from './pages/document/document.component';
import { DocumentApiComponent } from './pages/document-api/document-api.component';
import { DocumentCliComponent } from './pages/document-cli/document-cli.component';
import { DocumentPricingComponent } from './pages/document-pricing/document-pricing.component';
import { RegisterComponent } from './pages/register/register.component';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    TrangChuComponent,
    HeaderComponent,
    FooterComponent,
    ConvertComponent,
    TypeFileComponent,
    OcrComponent,
    ConvertPdfComponent,
    ConvertImgComponent,
    SecurityComponent,
    FormatComponent,
    SupportComponent,
    PricingComponent,
    DocumentLayoutComponent,
    HeaderDocumentComponent,
    FooterDocumentComponent,
    DocumentComponent,
    DocumentApiComponent,
    DocumentCliComponent,
    DocumentPricingComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1, }),
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GG_CLIENT_ID,
              {
                oneTapEnabled: false
              }
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.FB_CLIENT_ID)
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
