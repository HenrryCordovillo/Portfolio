import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { Project } from '@data/interfaces/project.interface';
import { ProjectService } from '@data/services/shared-service/project.service';

@Component({
  selector: 'shared-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('row')
  private row!: ElementRef<HTMLSpanElement>;
  private readonly projectService = inject(ProjectService);
  public projectList = signal<Project[]>(this.projectService.getProjetList());

  ngOnInit(): void {}

  public translateRow() {
    this.row.nativeElement.classList.toggle('translate-x-2');
  }
}
