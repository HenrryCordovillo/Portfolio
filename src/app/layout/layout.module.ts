import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SkeletonPageComponent } from './pages/skeleton-page/skeleton-page.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, SkeletonPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [SkeletonPageComponent],
})
export class LayoutModule {}
