import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import {ClienteService} from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {path: '', redirectTo: './clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
