import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntiguoTestamentoRoutingModule } from './antiguo-testamento-routing.module';
import { AntiguoTestamentoComponent } from './antiguo-testamento.component';
import { ExodoComponent } from '../exodo/exodo.component';
import { CreacionComponent } from '../creacion/creacion.component';
import { AsentamientoComponent } from '../asentamiento/asentamiento.component';


@NgModule({
  declarations: [
    AntiguoTestamentoComponent,
    ExodoComponent,
    CreacionComponent,
    AsentamientoComponent
  ],
  imports: [
    CommonModule,
    AntiguoTestamentoRoutingModule
  ]
})
export class AntiguoTestamentoModule { }
