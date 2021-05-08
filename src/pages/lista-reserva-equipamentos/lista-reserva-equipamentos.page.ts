import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';

@Component({
  selector: 'app-lista-reserva-equipamentos',
  templateUrl: './lista-reserva-equipamentos.page.html',
  styleUrls: ['./lista-reserva-equipamentos.page.scss'],
})
export class ListaReservaEquipamentosPage {

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
