import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routes'; // Archivo de rutas

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditComponent,
    NavbarComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
