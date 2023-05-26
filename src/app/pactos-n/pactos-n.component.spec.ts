import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PACTOSNComponent } from './pactos-n.component';

describe('PACTOSNComponent', () => {
  let component: PACTOSNComponent;
  let fixture: ComponentFixture<PACTOSNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PACTOSNComponent]
    });
    fixture = TestBed.createComponent(PACTOSNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
