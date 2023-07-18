import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { MenuItem } from '@data/interfaces/menu.interface';
import { MenuService } from '@data/services/layout-services/menu.service';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  @ViewChild('ulMenu')
  private ulMenu!: ElementRef<HTMLDivElement>;
  public menuItemsList = signal<MenuItem[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.menuItemsList = signal(this.menuService.getMenuList());
  }

  public openMenu(): void {
    console.log(this.ulMenu);
    this.ulMenu.nativeElement.classList.toggle('-translate-x-16');
  }
}
