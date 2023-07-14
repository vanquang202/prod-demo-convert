import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 
import { AppRoutingModule } from './app-routing.module';
// 
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// 
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
// 
import { environment } from 'src/environments/environment';
// 
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthPageModule } from './pages/auth-page/auth-page.module';
import { DocumentPageModule } from './pages/document-page/document-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CartPageModule } from './pages/cart-page/cart-page.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1, }),
    SocialLoginModule,
    GoogleSigninButtonModule,

    DocumentPageModule,
    HomePageModule,
    LayoutsModule,
    AuthPageModule,
    CartPageModule
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
