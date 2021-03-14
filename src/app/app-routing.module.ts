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
    path: 'lista-material',
    loadChildren: () => import('./lista-material/lista-material.module').then( m => m.ListaMaterialPageModule)
  },
  {
    path: 'lista-incidentes',
    loadChildren: () => import('./lista-incidentes/lista-incidentes.module').then( m => m.ListaIncidentesPageModule)
  },
  {
    path: 'lista-entrega-material',
    loadChildren: () => import('./lista-entrega-material/lista-entrega-material.module').then( m => m.ListaEntregaMaterialPageModule)
  },
  {
    path: 'cadastro-incidentes',
    loadChildren: () => import('./cadastro-incidentes/cadastro-incidentes.module').then( m => m.CadastroIncidentesPageModule)
  },
  {
    path: 'cadastro-tipo-equipamento',
    loadChildren: () => import('./cadastro-tipo-equipamento/cadastro-tipo-equipamento.module').then( m => m.CadastroTipoEquipamentoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
