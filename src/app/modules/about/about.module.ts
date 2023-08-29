import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ImagePerfilComponent } from './components/image-perfil/image-perfil.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [InformacionComponent, ImagePerfilComponent, DescriptionComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
