import { Component, OnInit, inject, signal } from '@angular/core';
import { MenuItem } from '@data/interfaces/menu.interface';
import { MenuService } from '@data/services/layout-services/menu.service';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  private readonly menuService = inject(MenuService);
  public menuItemsList = signal<MenuItem[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.menuItemsList.update((value) => this.menuService.getMenuList());
    // this.menuItemsList.set(this.menuService.getMenuList());
  }
}
