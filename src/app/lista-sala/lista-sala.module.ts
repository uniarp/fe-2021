import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSalaPageRoutingModule } from './lista-sala-routing.module';

import { ListaSalaPage } from './lista-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSalaPageRoutingModule
  ],
  declarations: [ListaSalaPage]
})
export class ListaSalaPageModule {}
