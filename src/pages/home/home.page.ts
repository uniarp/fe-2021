import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ReservaEquipamentoService } from 'src/services/reserva-equipamento.service';
import { ReservaSalaService } from 'src/services/reserva-sala.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(public routerService: Router) { }

  ionViewWillEnter() {
  }
 
}

