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
    path: 'cadastro-equipamento',
    loadChildren: () => import('./cadastro-equipamento/cadastro-equipamento.module').then( m => m.CadastroEquipamentoPageModule)
  },
  {
    path: 'solicitar-material',
    loadChildren: () => import('./solicitar-material/solicitar-material.module').then( m => m.SolicitarMaterialPageModule)
  },
  {
    path: 'cadastro-material',
    loadChildren: () => import('./cadastro-material/cadastro-material.module').then( m => m.CadastroMaterialPageModule)
  },
  {
    path: 'lista-software',
    loadChildren: () => import('./lista-software/lista-software.module').then( m => m.ListaSoftwarePageModule)
  },
  {
    path: 'solicitar-equipamento',
    loadChildren: () => import('./solicitar-equipamento/solicitar-equipamento.module').then( m => m.SolicitarEquipamentoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
