import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
 
  {
    path:'',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'antiguo-testamento',
    loadChildren:() => import('./antiguo-testamento/antiguo-testamento.module').then(m => m.AntiguoTestamentoModule)

  },
  {
    path: 'nuevo-testamento',
    loadChildren:() => import('./nuevo-testamento/nuevo-testamento.module').then(m => m.NuevoTestamentoModule)

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
