import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatriarcasComponent } from './patriarcas.component';

describe('PatriarcasComponent', () => {
  let component: PatriarcasComponent;
  let fixture: ComponentFixture<PatriarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatriarcasComponent]
    });
    fixture = TestBed.createComponent(PatriarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
