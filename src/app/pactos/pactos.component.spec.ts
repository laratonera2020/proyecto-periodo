import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PACTOSComponent } from './pactos.component';

describe('PACTOSComponent', () => {
  let component: PACTOSComponent;
  let fixture: ComponentFixture<PACTOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PACTOSComponent]
    });
    fixture = TestBed.createComponent(PACTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
