import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6AzureDemo';
  loader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (routerEvent) => {
        this.checkRouterEvents(routerEvent);
      }
    );
  }

  checkRouterEvents(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loader = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loader = false;
    }
  }


}

