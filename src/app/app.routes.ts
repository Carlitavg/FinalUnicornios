import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CartasComponent } from './paginas/cartas/cartas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'inicio', component: InicioComponent},
    {path: 'cartas', component: CartasComponent},
];
