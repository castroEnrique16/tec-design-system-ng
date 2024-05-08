import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbButtonGroupComponent } from './bmb-button-group.component';

describe('BmbButtonGroupComponent', () => {
  let component: BmbButtonGroupComponent;
  let fixture: ComponentFixture<BmbButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmbButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BmbButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});