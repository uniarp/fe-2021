import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSoftwarePage } from './lista-software.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSoftwarePageRoutingModule {}
