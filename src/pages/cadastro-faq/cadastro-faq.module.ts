import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFaqPageRoutingModule } from './cadastro-faq-routing.module';

import { CadastroFaqPage } from './cadastro-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFaqPageRoutingModule
  ],
  declarations: [CadastroFaqPage]
})
export class CadastroFaqPageModule {}
