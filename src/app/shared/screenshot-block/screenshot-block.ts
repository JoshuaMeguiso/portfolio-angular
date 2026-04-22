import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot-block',
  standalone: true,
  templateUrl: './screenshot-block.html',
})
export class ScreenshotBlockComponent {
  @Input() image = '';
  @Input() caption = '';
}
