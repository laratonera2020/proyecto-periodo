import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsentamientoComponent } from './asentamiento.component';

describe('AsentamientoComponent', () => {
  let component: AsentamientoComponent;
  let fixture: ComponentFixture<AsentamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsentamientoComponent]
    });
    fixture = TestBed.createComponent(AsentamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
