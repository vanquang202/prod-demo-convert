import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private authS: AuthService
  ) { }

  ngOnInit(): void {
    this.authS.listenEvent('loading-page').subscribe(
      (event: any) => {
        this.isLoading = event.status;
      }
    )
  }
}
