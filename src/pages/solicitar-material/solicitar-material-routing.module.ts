import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarMaterialPage } from './solicitar-material.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarMaterialPageRoutingModule {}
