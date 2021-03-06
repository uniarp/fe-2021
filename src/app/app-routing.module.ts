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
  },
  {
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
  {
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
  {
    path: 'lista-materiais-entregues',
    loadChildren: () => import('./lista-materiais-entregues/lista-materiais-entregues.module').then( m => m.ListaMateriaisEntreguesPageModule)
  },
  {
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
    path: 'lista-reservas-confirmadas',
    loadChildren: () => import('./lista-reservas-confirmadas/lista-reservas-confirmadas.module').then( m => m.ListaReservasConfirmadasPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'cadasto-faq',
    loadChildren: () => import('./cadasto-faq/cadasto-faq.module').then( m => m.CadastoFaqPageModule)
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
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
