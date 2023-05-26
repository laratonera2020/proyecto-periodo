import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoTestamentoRoutingModule } from './nuevo-testamento-routing.module';
import { NuevoTestamentoComponent } from './nuevo-testamento.component';


@NgModule({
  declarations: [
    NuevoTestamentoComponent
  ],
  imports: [
    CommonModule,
    NuevoTestamentoRoutingModule
  ]
})
export class NuevoTestamentoModule { }
