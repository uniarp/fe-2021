import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';
import { ReservaEquipamento } from '../../model/reserva-equipamento';
import { EquipamentoService } from '../../services/equipamento.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  
  reservaEquipamento: ReservaEquipamento;
  equipamentos:any;
  professores:any;

  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    public equipamentoService: EquipamentoService,
    public professorService:ProfessorService,
    public routerService:Router) {
    }

  ionViewDidEnter() {
    this.reservaEquipamento = new ReservaEquipamento();
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
      console.log(this.professores);
    });
    this.equipamentoService.listar().subscribe(dados => {
      this.equipamentos = dados;
      console.log(this.equipamentos);
    });
    
  }

  cadastrar(){
    this.reservaEquipamento.status= "reservado";
    this.reservaEquipamentoService.cadastrar(this.reservaEquipamento);
    console.log(this.reservaEquipamento);
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
