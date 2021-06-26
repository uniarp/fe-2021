import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroIncidentePage } from './cadastro-incidente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroIncidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroIncidentePageRoutingModule {}
