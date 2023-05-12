import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguoTestamentoComponent } from './antiguo-testamento.component';

describe('AntiguoTestamentoComponent', () => {
  let component: AntiguoTestamentoComponent;
  let fixture: ComponentFixture<AntiguoTestamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiguoTestamentoComponent]
    });
    fixture = TestBed.createComponent(AntiguoTestamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
