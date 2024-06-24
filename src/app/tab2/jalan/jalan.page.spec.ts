import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JalanPage } from './jalan.page';

describe('JalanPage', () => {
  let component: JalanPage;
  let fixture: ComponentFixture<JalanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JalanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
