import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from '@data/interfaces/project.interface';

@Component({
  selector: 'shared-project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  @ViewChild('description')
  private description!: ElementRef<HTMLParagraphElement>;
  @ViewChild('image')
  private image!: ElementRef<HTMLImageElement>;
  @Input() project!: Project;
  ngOnInit(): void {
    if (!this.project) throw new Error('No se obtubo un proyecto');
  }

  public addClassCard() {
    this.description.nativeElement.classList.toggle('opacity-100');
    // this.image.nativeElement.classList.toggle('brightness-[0.75]');
    this.image.nativeElement.classList.toggle('blur-sm');
  }

  public viewProject() {
    window.open(
      'https://henrrycordovillo.github.io/Portfolio/#/home',
      '_blank'
    );
  }
}
