import { Component, OnInit } from '@angular/core';
import { Menu } from '@data/interfaces/menu.interface';
import { MenuService } from '@data/services/layout-services/menu.service';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuList: Menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
  }
}
