import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  subscription: any;
  constructor(
    private socialAuthService: SocialAuthService,
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authS.getItem('user')) this.socialAuthService.signOut();
    this.subscription = this.socialAuthService.authState.subscribe((user: any) => {
      if (user) {
        this.router.navigate([""]);
        this.authS.saveItem('user', user);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
