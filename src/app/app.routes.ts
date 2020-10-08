import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id/:pag', component: PeliculasComponent },
    { path: 'buscar', component: BuscarComponent},
    { path: 'buscar/:texto', component: BuscarComponent},
    { path: '**', pathMatch:'full', redirectTo:'home' },

];

