import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/general-finance', title: 'General Finance',  icon: 'education_atom', class: '' },
    { path: '/banking', title: 'Banking',  icon: 'location_map-big', class: '' },
    { path: '/stocks-bonds', title: 'Stocks/Bonds',  icon: 'ui-1_bell-53', class: '' },
    { path: '/corporate-business', title: 'Corporate/Business',  icon: 'users_single-02', class: '' },
    { path: '/financial-markets', title: 'Financial Markets',  icon: 'design_bullet-list-67', class: '' },
    { path: 'http://neoappstack.com', title: 'Visit NeoAppStack',  icon: 'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
