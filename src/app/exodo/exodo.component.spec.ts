import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodoComponent } from './exodo.component';

describe('ExodoComponent', () => {
  let component: ExodoComponent;
  let fixture: ComponentFixture<ExodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExodoComponent]
    });
    fixture = TestBed.createComponent(ExodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
