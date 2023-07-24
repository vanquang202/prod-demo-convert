import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { ComponentsModule } from 'src/app/components/components.module';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    RouterModule,
    GoogleSigninButtonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class AuthPageModule { }
