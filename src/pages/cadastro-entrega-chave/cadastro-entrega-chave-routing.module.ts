import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEntregaChavePage } from './cadastro-entrega-chave.page';


const routes: Routes = [
  {
    path: '',
    component: CadastroEntregaChavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEntregaChavePageRoutingModule {}
