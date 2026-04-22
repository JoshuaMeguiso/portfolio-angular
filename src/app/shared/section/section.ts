import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.html',
})
export class SectionComponent {
  @Input() title = '';
}
