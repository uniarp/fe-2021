import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from 'src/services/reserva-equipamento.service';
import { ReservaSalaService } from 'src/services/reserva-sala.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  reservasSala : any;
  reservasEquipamento : any;
  itensRecentes : any;

  constructor(public reservaSalaService : ReservaSalaService, public reservaEquipamentoService : ReservaEquipamentoService, public routerService : Router) {}

  ionViewWillEnter() {
    this.reservasSala = [];
    this.reservaSalaService.listar().subscribe(dados => {
      this.reservasSala = dados;
    });
    this.reservasEquipamento = [];
    this.reservaEquipamentoService.listar().subscribe(dados => {
      this.reservasEquipamento = dados;
    });
  }

  listarReservaSala() {
    this.routerService.navigate(['lista-reservas-sala']);
  }

  cadastrarReservaSala() {
    this.routerService.navigate(['cadastro-reserva-sala']);
  }

  listarReservaEquipamento() {
    this.routerService.navigate(['lista-reservas-equipamento']);
  }

  cadastrarReservaEquipamento() {
    this.routerService.navigate(['cadastro-reserva-equipamento']);
  }
}
