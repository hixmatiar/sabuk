import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerkendaraPage } from './berkendara.page';

describe('BerkendaraPage', () => {
  let component: BerkendaraPage;
  let fixture: ComponentFixture<BerkendaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BerkendaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
