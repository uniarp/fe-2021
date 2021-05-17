import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProfessoresPage } from './lista-professores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProfessoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProfessoresPageRoutingModule {}
