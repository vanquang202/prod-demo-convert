import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ConvertWeb';

  constructor(
    private router: Router,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    AOS.init();
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        window.scrollTo(0, 0);
        if (title) {
          this.titleService.setTitle(`ConvertWeb | ${title}`);
        }
      });
  }
}
