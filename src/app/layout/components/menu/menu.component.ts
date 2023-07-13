import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from '@data/interfaces/menu.interface';
import { MenuService } from '@data/services/layout-services/menu.service';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItemsList = signal<MenuItem[]>([]);

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItemsList = signal(this.menuService.getMenuList());
  }
}
