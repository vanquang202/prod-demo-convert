import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { ComponentsModule } from 'src/app/components/components.module';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    RouterModule,
    GoogleSigninButtonModule,
    ComponentsModule,
  ]
})
export class AuthPageModule { }
