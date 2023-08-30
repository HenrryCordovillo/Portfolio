import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, IntroComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
