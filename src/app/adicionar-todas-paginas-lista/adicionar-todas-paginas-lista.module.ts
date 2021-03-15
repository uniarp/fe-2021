import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarTodasPaginasListaPageRoutingModule } from './adicionar-todas-paginas-lista-routing.module';

import { AdicionarTodasPaginasListaPage } from './adicionar-todas-paginas-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarTodasPaginasListaPageRoutingModule
  ],
  declarations: [AdicionarTodasPaginasListaPage]
})
export class AdicionarTodasPaginasListaPageModule {}
