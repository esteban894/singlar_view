import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  menu = [
    {
      icon: 'fa-cloud',
      text: 'Microsoft Purview',
      items: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-file',
      text: 'Informes',
      items: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-bars-progress',
      text: 'Utilidades',
      items: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-screwdriver-wrench',
      text: 'Administración',
      items: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-file-lines',
      text: 'Manuales',
      items: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
  ];

  activeMenu = false;

  toggleASide() {
    this.activeMenu = !this.activeMenu;
  }
}
