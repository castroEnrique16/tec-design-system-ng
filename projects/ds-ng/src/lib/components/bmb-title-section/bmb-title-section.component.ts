import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bmb-title-section',
  templateUrl: './bmb-title-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmbTitleSectionComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() image: string = '';
  @Input() altImage: string = '';
}
