import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'bmb-tag',
  templateUrl: './bmb-tags.component.html',
  styleUrls: ['../../../assets/styles/components/_tags.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmbTagComponent implements AfterViewInit {
  @Input() appearance: string = '';
  @Input() text: string = '';
  @Input() grouped: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.grouped) {
      
    }
    const parentElement = this.el.nativeElement.parentElement;

      let wrapperDiv = parentElement.querySelector('.tag--grouped');
      if (!wrapperDiv) {
        wrapperDiv = this.renderer.createElement('div');
        this.renderer.addClass(wrapperDiv, 'tag--grouped');
        this.renderer.insertBefore(parentElement, wrapperDiv, null);
      }

      this.renderer.appendChild(wrapperDiv, this.el.nativeElement);
  }

  getClasses(): string[] {
    const classes: string[] = ['badge'];

    if (this.appearance) {
      classes.push('badge--' + this.appearance);
    }

    return classes;
  }
}