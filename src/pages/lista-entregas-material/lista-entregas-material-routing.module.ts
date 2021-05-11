import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEntregasMaterialPage } from './lista-entregas-material.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEntregasMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEntregasMaterialPageRoutingModule {}
