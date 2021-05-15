import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-equipamento',
    loadChildren: () => import('../pages/cadastro-equipamento/cadastro-equipamento.module').then( m => m.CadastroEquipamentoPageModule)
  },
  {
    path: 'solicitar-material',
    loadChildren: () => import('../pages/solicitar-material/solicitar-material.module').then( m => m.SolicitarMaterialPageModule)
  },
  {
    path: 'cadastro-entrega-material',
    loadChildren : () => import('../pages/cadastro-entrega-material/cadastro-entrega-material.module').then( m => m.CadastroEntregaMaterialPageModule)
  },
  {
    path : 'lista-entregas-material',
    loadChildren : () => import('../pages/lista-entregas-material/lista-entregas-material.module').then( m => m.ListaEntregasMaterialPageModule)
  },
  {
    path: 'cadastro-material',
    loadChildren: () => import('../pages/cadastro-material/cadastro-material.module').then( m => m.CadastroMaterialPageModule)
  },
  {
    path: 'lista-software',
    loadChildren: () => import('../pages/lista-software/lista-software.module').then( m => m.ListaSoftwarePageModule)
  },
  {
    path: 'solicitar-equipamento',
    loadChildren: () => import('../pages/solicitar-equipamento/solicitar-equipamento.module').then( m => m.SolicitarEquipamentoPageModule)
  },
  {
    path: 'cadastro-sala',
    loadChildren: () => import('../pages/cadastro-sala/cadastro-sala.module').then( m => m.CadastroSalaPageModule)
  },
  {
    path: 'cadastro-curso',
    loadChildren: () => import('../pages/cadastro-curso/cadastro-curso.module').then( m => m.CadastroCursoPageModule)
  },
  {
    path: 'cadastro-professor',
    loadChildren: () => import('../pages/cadastro-professor/cadastro-professor.module').then( m => m.CadastroProfessorPageModule)
  },
  {
    path: 'lista-vistorias',
    loadChildren: () => import('../pages/lista-vistorias/lista-vistorias.module').then( m => m.ListaVistoriasPageModule)
  },
  {
    path: 'cadastro-material',
    loadChildren: () => import('../pages/cadastro-material/cadastro-material.module').then( m => m.CadastroMaterialPageModule)
  },
  {
    path: 'lista-materiais-entregues',
    loadChildren: () => import('../pages/lista-materiais-entregues/lista-materiais-entregues.module').then( m => m.ListaMateriaisEntreguesPageModule)
  },
  {
    path: 'lista-sala',
    loadChildren: () => import('../pages/lista-sala/lista-sala.module').then( m => m.ListaSalaPageModule)
  },
  {
    path: 'lista-incidentes-resolvidos',
    loadChildren: () => import('../pages/lista-incidentes-resolvidos/lista-incidentes-resolvidos.module').then( m => m.ListaIncidentesResolvidosPageModule)
  },
  {
    path: 'lista-reserva-equipamentos',
    loadChildren: () => import('../pages/lista-reserva-equipamentos/lista-reserva-equipamentos.module').then( m => m.ListaReservaEquipamentosPageModule)
  },
  {
    path: 'adicionar-todas-paginas-lista',
    loadChildren: () => import('../pages/adicionar-todas-paginas-lista/adicionar-todas-paginas-lista.module').then( m => m.AdicionarTodasPaginasListaPageModule)
  },
  {
    path: 'lista-reservas-sala',
    loadChildren: () => import('../pages/lista-reservas-sala/lista-reservas-sala.module').then( m => m.ListaReservasSalaPageModule)
  },
  {
    path: 'lista-reservas-confirmadas',
    loadChildren: () => import('../pages/lista-reservas-confirmadas/lista-reservas-confirmadas.module').then( m => m.ListaReservasConfirmadasPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('../pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'lista-de-equipamentos',
    loadChildren: () => import('../pages/lista-de-equipamentos/lista-de-equipamentos.module').then( m => m.ListaDeEquipamentosPageModule)
  },
  {
    path: 'buscar-salas',
    loadChildren: () => import('../pages/buscar-salas/buscar-salas.module').then( m => m.BuscarSalasPageModule)
  },
  {
    path: 'solicitar-reserva-sala',
    loadChildren: () => import('../pages/solicitar-reserva-sala/solicitar-reserva-sala.module').then( m => m.SolicitarReservaSalaPageModule)
  },
  {
    path: 'lista-tipos-equipamento',
    loadChildren: () => import('../pages/lista-tipos-equipamento/lista-tipos-equipamento.module').then( m => m.ListaTiposEquipamentoPageModule)
  },
  {
    path: 'cadastro-tipo-equipamento',
    loadChildren: () => import('../pages/cadastro-tipo-equipamento/cadastro-tipo-equipamento.module').then( m => m.CadastroTipoEquipamentoPageModule)
  },
  {
    path: 'lista-pergunta',
    loadChildren: () => import('../pages/lista-pergunta/lista-pergunta.module').then( m => m.ListaPerguntaPageModule)
  },
  {
    path: 'cadastro-faq',
    loadChildren: () => import('../pages/cadastro-faq/cadastro-faq.module').then( m => m.CadastroFaqPageModule)
  },
  {
    path: 'cadastro-chave',
    loadChildren: () => import('../pages/cadastro-chave/cadastro-chave.module').then( m => m.CadastroChavePageModule)
  },
  {
    path: 'cadastro-entrega-chave',
    loadChildren: () => import('../pages/cadastro-entrega-chave/cadastro-entrega-chave.module').then( m => m.CadastroEntregaChavePageModule)
  },
  {
    path: 'cadastro-software',
    loadChildren: () => import('../pages/cadastro-software/cadastro-software.module').then( m => m.CadastroSoftwarePageModule)
  },
  {
    path: 'cadastro-curso',
    loadChildren: () => import('../pages/cadastro-curso/cadastro-curso.module').then( m => m.CadastroCursoPageModule)
  },
  {
    path: 'cadastro-disciplina',
    loadChildren: () => import('../pages/cadastro-disciplina/cadastro-disciplina.module').then( m => m.CadastroDisciplinaPageModule)
  },
  {
    path: 'cadastro-vistoria',
    loadChildren: () => import('../pages/cadastro-vistoria/cadastro-vistoria.module').then( m => m.CadastroVistoriaPageModule)
  },
  {
    path: 'lista-materiais',
    loadChildren: () => import('../pages/lista-materiais/lista-materiais.module').then( m => m.ListaMateriaisPageModule)
  },
  {
    path: 'lista-de-cursos',
    loadChildren: () => import('../pages/lista-de-cursos/lista-de-cursos.module').then( m => m.ListaDeCursosPageModule)
  },
  {
    path:'lista-equipamentos-solicitados',
    loadChildren:()=>import('../pages/lista-equipamentos-solicitados/lista-equipamentos-solicitados.module').then(m=>m.ListaEquipamentosSolicitadosPageModule)
  },
  {
    path:'lista-chaves',
    loadChildren:()=>import('../pages/lista-chaves/lista-chaves.module').then(m=>m.ListaChavesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
