import { Component, OnInit } from '@angular/core';
import { Professor } from '../classes/professor';
import { EquipamentoService } from '../services/equipamento.service';
import { ProfessorService } from '../services/professor.service';
import { TipoEquipamentoService } from '../services/tipo-equipamento.service';
import { TipoEquipamento } from '../classes/tipo-equipamento';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  solicitacao:any={}; //

  tiposEquipamento:TipoEquipamento;
  professores:Professor;
  constructor(
    private equipamentoService:EquipamentoService,
    private tipoEquipamentoService: TipoEquipamentoService,
    private professorService: ProfessorService
  ) {

   }

  ionViewWillEnter(){
    this.tipoEquipamentoService.listar().subscribe(dados=>{
      this.tiposEquipamento=dados
      console.log('tipoequip',this.tiposEquipamento)
    });
    this.professorService.listar().subscribe((dados:any)=>{
      this.professores=dados
      console.log('professor',this.professores)
    })
  }

  gravar(solicitacao:any){
  return new Promise((resolve,reject)=>{
    this.equipamentoService.solicitar(solicitacao)
    .subscribe(response=>{
      resolve(response)
    })
  })
  }

}
