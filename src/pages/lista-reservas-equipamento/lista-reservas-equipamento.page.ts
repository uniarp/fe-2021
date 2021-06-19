import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';

@Component({
  selector: 'app-lista-reservas-equipamentos',
  templateUrl: './lista-reservas-equipamento.page.html',
  styleUrls: ['./lista-reservas-equipamento.page.scss'],
})
export class ListaReservasEquipamentoPage {
  
  pesquisa = '';
  reservasEquipamento : any;
  emHome: boolean;
  
  constructor(public reservaEquipamentoService:ReservaEquipamentoService, public routerService:Router) {
    this.emHome = this.routerService.url == "/home/lista-reservas-equipamento";
  }

  novo(){
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }

  ionViewWillEnter() {
    this.reservasEquipamento = [];
    this.reservaEquipamentoService.listar().subscribe(dados => {
      this.reservasEquipamento = dados;
    });
  }
}
