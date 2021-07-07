import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSoftwaresPageRoutingModule } from './lista-softwares-routing.module';

import { ListaSoftwaresPage } from './lista-softwares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSoftwaresPageRoutingModule
  ],
  declarations: [ListaSoftwaresPage]
})
export class ListaSoftwaresPageModule {}
