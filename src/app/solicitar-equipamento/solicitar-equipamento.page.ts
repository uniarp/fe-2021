import { Component, OnInit } from '@angular/core';
import { Professor } from '../classes/professor';
import { EquipamentoService } from '../services/equipamento.service';
import { ProfessorService } from '../services/professor.service';
import { equipamentoService } from '../services/tipo-equipamento.service';
import { equipamento } from '../classes/tipo-equipamento';
import { Router } from '@angular/router';
import { Equipamento } from '../classes/equipamento';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  solicitacao:any={}; //
  
  equipamento:Equipamento;
  professores:Professor;
  constructor(
    public equipamentoService:EquipamentoService,
    public professorService:ProfessorService,
    public routerService:Router
  ) {

   }

  ionViewWillEnter(){
    this.equipamentoService.listar().subscribe(dados=>{
      this.equipamento=dados
      console.log('equipamento',this.equipamento)
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
