import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isActiveBackTop: boolean = false;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    if (window.scrollY > 100) {
      this.isActiveBackTop = true;
    } else {
      this.isActiveBackTop = false;
    }
  };

  backTop() {
    window.scrollTo(0, 0);
  }
}
