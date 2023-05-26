import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionComponent } from '../creacion/creacion.component';
import { ExodoComponent } from '../exodo/exodo.component';
import { AsentamientoComponent } from '../asentamiento/asentamiento.component';
import { JuecesComponent } from '../jueces/jueces.component';
import { AntiguoTestamentoComponent } from './antiguo-testamento.component';
import { ReinoUnidoComponent } from '../reino-unido/reino-unido.component';
import { ReinoDivididoComponent } from '../reino-dividido/reino-dividido.component';
import { CautiverioComponent } from '../cautiverio/cautiverio.component';
import { SilencioComponent } from '../silencio/silencio.component';
import { PACTOSComponent } from '../pactos/pactos.component';
import { PatriarcasComponent } from '../patriarcas/patriarcas.component';

const routes: Routes = [
  {
    path: '',
    component: AntiguoTestamentoComponent,
  },
  {
    path: 'creacion',
    component: CreacionComponent

  },
  {
    path: 'exodo',
    component: ExodoComponent
  },
  {
    path: 'asentamiento',
    component: AsentamientoComponent
  },
  {
    path:'jueces',
    component: JuecesComponent
  },
  {

  path:'reino-unido',
  component: ReinoUnidoComponent
  },
  {
    path: 'reino-dividido',
    component: ReinoDivididoComponent
  },
  {
    path: 'cautiverio',
    component: CautiverioComponent
  },
  {
    path: 'silencio',
    component: SilencioComponent
  },
  {

    path:'pactos',
    component: PACTOSComponent 
    },
    {

      path:'patriarcas',
      component: PatriarcasComponent
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntiguoTestamentoRoutingModule { }
