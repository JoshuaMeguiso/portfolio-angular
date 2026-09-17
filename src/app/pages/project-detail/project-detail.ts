import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';
import { SectionComponent } from '../../shared/section/section';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    RouterLink,
  ],
  templateUrl: './project-detail.html',
})
export class ProjectDetailComponent {
  project: Project | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      this.project = PROJECTS.find((p) => p.slug === slug) ?? null;
    });
  }
}
