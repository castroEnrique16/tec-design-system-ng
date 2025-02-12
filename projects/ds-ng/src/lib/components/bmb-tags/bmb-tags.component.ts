import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmbIconComponent } from '../bmb-icon/bmb-icon.component';
@Component({
  selector: 'bmb-tag',
  standalone: true,
  imports: [CommonModule, BmbIconComponent],
  styleUrl: './bmb-tags.component.scss',
  templateUrl: './bmb-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BmbTagComponent implements AfterViewInit {
  @Input() appearance: string = '';
  @Input() text: string = '';
  @Input() grouped: boolean = false;
  @Input() dissmisable: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    if (this.grouped) {
      const parentElement = this.el.nativeElement.parentElement;

      let wrapperDiv = parentElement.querySelector('.bmb_tag-grouped');
      if (!wrapperDiv) {
        wrapperDiv = this.renderer.createElement('div');
        this.renderer.addClass(wrapperDiv, 'bmb_tag-grouped');
        this.renderer.insertBefore(parentElement, wrapperDiv, null);
      }

      this.renderer.appendChild(wrapperDiv, this.el.nativeElement);
    }
  }

  getClasses(): string[] {
    const classes: string[] = ['bmb_tag'];

    if (this.appearance) {
      classes.push('bmb_tag-' + this.appearance);
    }

    return classes;
  }

  closeTag() {
    this.el.nativeElement.remove();
  }
}
