import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTestamentoComponent } from './nuevo-testamento.component';

describe('NuevoTestamentoComponent', () => {
  let component: NuevoTestamentoComponent;
  let fixture: ComponentFixture<NuevoTestamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoTestamentoComponent]
    });
    fixture = TestBed.createComponent(NuevoTestamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
