import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects';
import { SectionComponent } from '../../shared/section/section';
import { ScreenshotBlockComponent } from '../../shared/screenshot-block/screenshot-block';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, SectionComponent, ScreenshotBlockComponent],
  templateUrl: './project-detail.html',
})
export class ProjectDetailComponent {
  project: any = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      this.project = PROJECTS.find((p) => p.slug === slug) ?? null;

      console.log('DEBUG slug:', slug);
      console.log('DEBUG project:', this.project);
    });
  }
}
