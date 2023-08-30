import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
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
  @ViewChild('ulMenu') private ulMenu!: ElementRef<HTMLDivElement>;
  @Output() classSticky = new EventEmitter<string[]>();
  private readonly menuService = inject(MenuService);

  public menuItemsList = signal<MenuItem[]>([]);

  ngOnInit(): void {
    this.menuItemsList = signal(this.menuService.getMenuList());
  }
  public openMenu() {
    this.ulMenu.nativeElement.classList.toggle('translate-y-0');
    this.classSticky.emit(['sticky', 'top-0']);
  }
}
