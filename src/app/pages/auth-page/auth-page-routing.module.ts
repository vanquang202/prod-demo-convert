import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "register",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "login",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule { }
