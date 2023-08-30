import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [CommonModule],
  exports: [ProjectsComponent, ProjectComponent],
})
export class SharedModule {}
