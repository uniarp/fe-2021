import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTiposEquipamentoPage } from './lista-tipos-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTiposEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTiposEquipamentoPageRoutingModule {}
