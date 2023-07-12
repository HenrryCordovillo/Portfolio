import { Injectable } from '@angular/core';
import { Menu } from '@data/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menuList: Menu[] = [];

  constructor() {}

  getMenuList(): Menu[] {
    this.menuList = [
      { label: 'About', routerLink: '' },
      { label: 'Contact', routerLink: '' },
      { label: 'Dashboard', routerLink: '' },
    ];
    return [...this.menuList];
  }
}
