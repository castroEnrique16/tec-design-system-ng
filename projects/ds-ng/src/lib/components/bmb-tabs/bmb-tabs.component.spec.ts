import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmbTabsComponent } from './bmb-tabs.component';

describe('BmbTabsComponent', () => {
  let component: BmbTabsComponent;
  let fixture: ComponentFixture<BmbTabsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbTabsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
