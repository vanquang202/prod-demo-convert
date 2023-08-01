import { Component } from '@angular/core';

@Component({
  selector: 'app-mya-layout',
  templateUrl: './mya-layout.component.html',
  styleUrls: ['./mya-layout.component.css']
})
export class MyaLayoutComponent {
  isHideTabLeft: boolean = false;
  isMobile: boolean = false;

  onClickRouterLink() {
    this.isMobile = false;
  }
}
