import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumb } from './breadcrumb';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit {

  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute.root))
  );

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Página Inicial';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
