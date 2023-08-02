import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { ImagePerfilComponent } from './components/image-perfil/image-perfil.component';


@NgModule({
  declarations: [
    HomePageComponent,
    IntroComponent,
    ImagePerfilComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
