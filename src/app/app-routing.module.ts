import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'lista-de-salas',
    loadChildren: () => import('./lista-de-salas/lista-de-salas.module').then( m => m.ListaDeSalasPageModule)
  },
  {
    path: 'lista-incidentes-resolvidos',
    loadChildren: () => import('./lista-incidentes-resolvidos/lista-incidentes-resolvidos.module').then( m => m.ListaIncidentesResolvidosPageModule)
  },
  {
    path: 'lista-reserva-equipamentos',
    loadChildren: () => import('./lista-reserva-equipamentos/lista-reserva-equipamentos.module').then( m => m.ListaReservaEquipamentosPageModule)
  },
  {
    path: 'adicionar-todas-paginas-lista',
    loadChildren: () => import('./adicionar-todas-paginas-lista/adicionar-todas-paginas-lista.module').then( m => m.AdicionarTodasPaginasListaPageModule)
  },
  {
    path: 'lista-reserva-de-salas',
    loadChildren: () => import('./lista-reserva-de-salas/lista-reserva-de-salas.module').then( m => m.ListaReservaDeSalasPageModule)
  },
  {
    path: 'lista-de-equipamentos',
    loadChildren: () => import('./lista-de-equipamentos/lista-de-equipamentos.module').then( m => m.ListaDeEquipamentosPageModule)
  },
  {
    path: 'buscar-salas',
    loadChildren: () => import('./buscar-salas/buscar-salas.module').then( m => m.BuscarSalasPageModule)
  },
  {
    path: 'solicitar-reserva-salas',
    loadChildren: () => import('./solicitar-reserva-salas/solicitar-reserva-salas.module').then( m => m.SolicitarReservaSalasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
