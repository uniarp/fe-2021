import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaSalaService } from '../../services/reserva-sala.service';

@Component({
  selector: 'app-lista-reservas-sala',
  templateUrl: './lista-reservas-sala.page.html',
  styleUrls: ['./lista-reservas-sala.page.scss'],
})
export class ListaReservasSalaPage {

  reservasSala : any;

  constructor(public reservaSalaService : ReservaSalaService, public routerService : Router) {
  }

  novo() {
    this.routerService.navigateByUrl('/solicitar-reserva-sala');
  }

  ionViewWillEnter() {
    this.reservaSalaService.listar().subscribe(dados => {
      this.reservasSala = dados;
    });
  }

  cadastrarEntregaChave() {
    this.routerService.navigateByUrl('/cadastro-entrega-chave');
  }
  
}
