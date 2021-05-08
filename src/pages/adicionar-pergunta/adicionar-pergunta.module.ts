import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPerguntaPageRoutingModule } from './adicionar-pergunta-routing.module';

import { AdicionarPerguntaPage } from './adicionar-pergunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPerguntaPageRoutingModule
  ],
  declarations: [AdicionarPerguntaPage]
})
export class AdicionarPerguntaPageModule {}
