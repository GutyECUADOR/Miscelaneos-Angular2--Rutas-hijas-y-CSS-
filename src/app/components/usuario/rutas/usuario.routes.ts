import { Routes } from '@angular/router';
import { UsuarioEditComponent } from './../usuario-edit.component';
import { UsuarioNuevoComponent } from './../usuario-nuevo.component';
import { UsuarioDetalleComponent } from './../usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'detalle' }
];

