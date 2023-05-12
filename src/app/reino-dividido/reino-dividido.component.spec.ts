import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoDivididoComponent } from './reino-dividido.component';

describe('ReinoDivididoComponent', () => {
  let component: ReinoDivididoComponent;
  let fixture: ComponentFixture<ReinoDivididoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReinoDivididoComponent]
    });
    fixture = TestBed.createComponent(ReinoDivididoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
