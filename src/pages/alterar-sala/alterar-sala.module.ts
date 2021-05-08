import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarSalaPageRoutingModule } from './alterar-sala-routing.module';

import { AlterarSalaPage } from './alterar-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarSalaPageRoutingModule
  ],
  declarations: [AlterarSalaPage]
})
export class AlterarSalaPageModule {}
