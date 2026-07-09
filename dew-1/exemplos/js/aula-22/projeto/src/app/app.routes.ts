import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

/* Cada página deverá ter sua própria rota de acesso */
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'home-page', redirectTo: 'home' } /* Rota para a página inicial */,
  { path: '**', redirectTo: 'home' } /* Rota para páginas não encontradas */,
];
