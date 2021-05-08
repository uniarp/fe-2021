import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSoftwarePageRoutingModule } from './lista-software-routing.module';

import { ListaSoftwarePage } from './lista-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSoftwarePageRoutingModule
  ],
  declarations: [ListaSoftwarePage]
})
export class ListaSoftwarePageModule {}
