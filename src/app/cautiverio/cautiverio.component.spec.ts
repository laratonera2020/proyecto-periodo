import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautiverioComponent } from './cautiverio.component';

describe('CautiverioComponent', () => {
  let component: CautiverioComponent;
  let fixture: ComponentFixture<CautiverioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CautiverioComponent]
    });
    fixture = TestBed.createComponent(CautiverioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
