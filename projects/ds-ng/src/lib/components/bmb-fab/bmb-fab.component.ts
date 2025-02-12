import {
  Component,
  HostListener,
  Input,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmbIconComponent } from '../bmb-icon/bmb-icon.component';
import { FabSize, FabType } from './bmb-fab-.interface';
@Component({
  selector: 'bmb-fab',
  styleUrl: './bmb-fab.component.scss',
  templateUrl: './bmb-fab.component.html',
  standalone: true,
  imports: [CommonModule, BmbIconComponent],
  encapsulation: ViewEncapsulation.None,
})
export class BmbFabComponent {
  @Input() icon = '';
  @Input() text?: string | null = '';
  @Input() size?: FabSize;
  @Input() type?: FabType;

  active: boolean = false;

  closeIcon = 'close';

  fabStyle = '';

  @HostListener('click') myClick() {
    if (this.type == 'normal') {
      this.active = !this.active;
    }
  }

  constructor() {}

  ngOnInit() {
    this.fabStyle = this.setStyles();
  }

  setStyles() {
    let style = 'bmb_fab';

    if (this.size == 'small') {
      style = `${style}-small`;
    } else {
      style = `${style}-large`;
    }

    if (this.type === 'extended') {
      style = `${style}-extended`;
    } else {
      style = `${style}-normal`;
    }
    return style;
  }
}
