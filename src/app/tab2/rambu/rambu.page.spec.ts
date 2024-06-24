import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RambuPage } from './rambu.page';

describe('RambuPage', () => {
  let component: RambuPage;
  let fixture: ComponentFixture<RambuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RambuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
