import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilencioComponent } from './silencio.component';

describe('SilencioComponent', () => {
  let component: SilencioComponent;
  let fixture: ComponentFixture<SilencioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilencioComponent]
    });
    fixture = TestBed.createComponent(SilencioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
