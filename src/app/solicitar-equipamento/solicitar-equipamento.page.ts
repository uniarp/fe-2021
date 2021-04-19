import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../services/reserva-equipamento.service';
import { ReservaEquipamento } from '../classes/reserva-equipamento';
import { TipoEquipamentoService } from '../services/tipo-equipamento.service';
import { TipoEquipamento } from '../classes/tipo-equipamento';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../equipamento.service';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../classes/professor';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  
  reservaEquipamento: ReservaEquipamento;
  // tipoEquipamentos:TipoEquipamento[];
  // equipamentos:Equipamento[];
  // professores:Professor[];

  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    // public tipoEquipamentoService: TipoEquipamentoService,
    // public equipamentoService: EquipamentoService,
    // public professorService:ProfessorService,
    public routerService:Router) {
    }

  ionViewDidEnter() {
    this.reservaEquipamento = new ReservaEquipamento();
  }

  cadastrar(){
    this.reservaEquipamento.status= "reservado";
    this.reservaEquipamentoService.cadastrar(this.reservaEquipamento);
    // this.routerService.navigate(['lista-reserva-equipamentos']);
    console.log(this.reservaEquipamento);
    // this.routerService.navigate(['lista-reserva-equipamentos']);

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
