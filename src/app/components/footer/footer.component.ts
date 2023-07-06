import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    if (window.scrollY > 100) {
      document.querySelector(".back-to-top")?.classList.add('active')
    } else {
      document.querySelector(".back-to-top")?.classList.remove('active')
    }
  };
}
