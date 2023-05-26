import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoTestamentoComponent } from './nuevo-testamento.component';

const routes: Routes = [
  {
    path: '',
    component: NuevoTestamentoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoTestamentoRoutingModule { }

