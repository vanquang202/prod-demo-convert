import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance, PageScrollOptions } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-document-api',
  templateUrl: './document-api.component.html',
  styleUrls: ['./document-api.component.css']
})
export class DocumentApiComponent implements OnInit {
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    let sections = document.querySelectorAll('.section-id');
    let navLinks = document.querySelectorAll('.section-select');
    window.addEventListener('scroll', function () {
      let currentSection = '';
      sections.forEach(function (section: any) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('data-hr') === '#' + currentSection) {
          console.log(link);
          link.classList.add('active');
        }
      });
    });
  }

  scrollToElement(el: string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: el,
    });
  }
}
