import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../services/reserva-equipamento.service';
import { ReservaEquipamento } from '../classes/reserva-equipamento';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  
  reservaEquipamento: ReservaEquipamento;

  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    public routerService:Router) {
    }

  ionViewDidEnter() {
    this.reservaEquipamento = new ReservaEquipamento();
  }

  gravar(){
    this.reservaEquipamentoService.cadastrar(this.reservaEquipamento);
    this.routerService.navigate(['lista-reserva-equipamentos']);
  }

  cancelar() {
    this.reservaEquipamento.dataEntrega = null;
    this.reservaEquipamento.dataDevolucao = null;
    this.reservaEquipamento.observacao = null;
    this.reservaEquipamento.periodo = null;
    this.reservaEquipamento.status = null;
  }

  listar() {
    this.routerService.navigate(['lista-reserva-equipamentos']);
  }
  
  novo() {
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }
}
