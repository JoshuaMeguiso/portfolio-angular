import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../shared/project-card/project-card';
import { SectionComponent } from '../../shared/section/section';
import { SkillsSectionComponent } from '../../shared/skills-section/skills-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, SectionComponent, SkillsSectionComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  projects = PROJECTS;
}
