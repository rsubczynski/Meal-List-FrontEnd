import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[];

  constructor() {
    this.items = [{
      label: 'Menu',
      items: [
        { label: 'Starter', icon: 'pi pi-fw pi-globe', routerLink: '/home'},
        { label: 'Lista Dań', icon: 'pi pi-fw pi-list', routerLink: '/dish-list'},
        { label: 'Przykład', icon: 'pi pi-fw pi-plus', routerLink: '/dish' }
      ]
    }]
  }
}
