import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPerguntaPageRoutingModule } from './lista-pergunta-routing.module';

import { ListaPerguntaPage } from './lista-pergunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPerguntaPageRoutingModule
  ],
  declarations: [ListaPerguntaPage]
})
export class ListaPerguntaPageModule {}
