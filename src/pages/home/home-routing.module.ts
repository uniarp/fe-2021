import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'lista-reservas-equipamento',
        children: [
          {
            path: '',
            loadChildren: () => import('../lista-reservas-equipamento/lista-reservas-equipamento.module').then(m => m.ListaReservasEquipamentoPageModule)
          }
        ]
      },
      {
        path: 'lista-reservas-sala',
        children: [
          {
            path: '',
            loadChildren: () => import('../lista-reservas-sala/lista-reservas-sala.module').then(m => m.ListaReservasSalaPageModule)
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
