import { Injectable } from '@angular/core';
import { MenuItem } from '@data/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menuItemList: MenuItem[] = [];

  constructor() {}

  getMenuList(): MenuItem[] {
    this.menuItemList = [
      { label: 'About', routerLink: 'about' },
      { label: 'Contact', routerLink: 'contact' },
      { label: 'Dashboard', routerLink: 'dashboard' },
    ];
    return [...this.menuItemList];
  }
}
