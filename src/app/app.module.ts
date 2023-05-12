import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionComponent } from './creacion/creacion.component';
import { ExodoComponent } from './exodo/exodo.component';
import { AsentamientoComponent } from './asentamiento/asentamiento.component';
import { AntiguoTestamentoComponent } from './antiguo-testamento/antiguo-testamento.component';
import { JuecesComponent } from './jueces/jueces.component';
import { AntiguoTestamentoModule } from './antiguo-testamento/antiguo-testamento.module';
import { ReinoUnidoComponent } from './reino-unido/reino-unido.component';
import { ReinoDivididoComponent } from './reino-dividido/reino-dividido.component';
import { CautiverioComponent } from './cautiverio/cautiverio.component';
import { SilencioComponent } from './silencio/silencio.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ReinoUnidoComponent,
    ReinoDivididoComponent,
    CautiverioComponent,
    SilencioComponent,
    InicioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AntiguoTestamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
