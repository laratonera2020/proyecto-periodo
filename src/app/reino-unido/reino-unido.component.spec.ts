import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoUnidoComponent } from './reino-unido.component';

describe('ReinoUnidoComponent', () => {
  let component: ReinoUnidoComponent;
  let fixture: ComponentFixture<ReinoUnidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReinoUnidoComponent]
    });
    fixture = TestBed.createComponent(ReinoUnidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
