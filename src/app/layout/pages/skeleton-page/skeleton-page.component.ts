import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './skeleton-page.component.html',
  styles: [],
})
export class SkeletonPageComponent implements AfterViewInit {
  @ViewChild('menu') private menu!: ElementRef<HTMLDivElement>;
  ngAfterViewInit(): void {
    this.addClassSticky(['sticky', 'top-0']);
  }

  public addClassSticky(classSticky: string[]) {
    for (const classMenu of classSticky) {
      this.menu.nativeElement.classList.toggle(classMenu);
    }
  }
}
