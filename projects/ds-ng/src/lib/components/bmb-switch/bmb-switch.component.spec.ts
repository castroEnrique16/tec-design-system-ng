import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmbSwitchComponent } from './bmb-switch.component';

describe('BmbSwitchComponent', () => {
  let component: BmbSwitchComponent;
  let fixture: ComponentFixture<BmbSwitchComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbSwitchComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
