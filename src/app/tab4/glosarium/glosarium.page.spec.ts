import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlosariumPage } from './glosarium.page';

describe('GlosariumPage', () => {
  let component: GlosariumPage;
  let fixture: ComponentFixture<GlosariumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosariumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
