import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkahPage } from './markah.page';

describe('MarkahPage', () => {
  let component: MarkahPage;
  let fixture: ComponentFixture<MarkahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
