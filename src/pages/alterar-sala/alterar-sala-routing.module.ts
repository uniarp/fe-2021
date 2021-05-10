import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarSalaPage } from './alterar-sala.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarSalaPageRoutingModule {}
