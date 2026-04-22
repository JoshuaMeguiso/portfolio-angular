import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/skills';
import { SectionComponent } from '../section/section';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './skills-section.html',
})
export class SkillsSectionComponent {
  skills = [...SKILLS].sort((a, b) => b.level - a.level);

  activeCategory: string = 'All';

  categories = ['All', ...new Set(this.skills.map((s) => s.category))];

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  get filteredSkills() {
    if (this.activeCategory === 'All') return this.skills;
    return this.skills.filter((s) => s.category === this.activeCategory);
  }

  groupedSkills() {
    const map = new Map<string, any[]>();

    this.filteredSkills.forEach((skill) => {
      if (!map.has(skill.category)) {
        map.set(skill.category, []);
      }
      map.get(skill.category)!.push(skill);
    });

    return Array.from(map.entries()).map(([category, skills]) => ({
      category,
      skills,
    }));
  }
}
