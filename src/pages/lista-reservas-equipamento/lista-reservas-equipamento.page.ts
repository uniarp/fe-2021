import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';

@Component({
  selector: 'app-lista-reservas-equipamentos',
  templateUrl: './lista-reservas-equipamento.page.html',
  styleUrls: ['./lista-reservas-equipamento.page.scss'],
})
export class ListaReservasEquipamentoPage {

  reservaEquipamento:any;
  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    public routerService:Router
  ) { }

  novo(){
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }

  ionViewWillEnter() {
    this.reservaEquipamentoService.listar().subscribe(dados => {
      this.reservaEquipamento = dados;
      console.log(this.reservaEquipamento);
    });
  }
}
