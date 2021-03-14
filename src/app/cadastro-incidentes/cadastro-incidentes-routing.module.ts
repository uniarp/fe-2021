import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroIncidentesPage } from './cadastro-incidentes.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroIncidentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroIncidentesPageRoutingModule {}
