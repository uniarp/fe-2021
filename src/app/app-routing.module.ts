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
    path: 'cadastro-sala',
    loadChildren: () => import('./cadastro-sala/cadastro-sala.module').then( m => m.CadastroSalaPageModule)
  },
  {
    path: 'cadastro-curso',
    loadChildren: () => import('./cadastro-curso/cadastro-curso.module').then( m => m.CadastroCursoPageModule)
  },
  {
    path: 'cadastro-professor',
    loadChildren: () => import('./cadastro-professor/cadastro-professor.module').then( m => m.CadastroProfessorPageModule)
  },
  {
    path: 'lista-vistorias',
    loadChildren: () => import('./lista-vistorias/lista-vistorias.module').then( m => m.ListaVistoriasPageModule)
  },
  {
    path: 'cadastro-material',
    loadChildren: () => import('./cadastro-material/cadastro-material.module').then( m => m.CadastroMaterialPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
