import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamento } from '../tipo-equipamento';
import { TipoEquipamentoService } from '../tipo-equipamento.service';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.page.html',
  styleUrls: ['./cadastro-equipamento.page.scss'],
})
export class CadastroEquipamentoPage  {
  //variavel pra guarda a equipamento
  tipoEquipamento: TipoEquipamento;

  constructor(
    public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router
  ) { }

  ionViewDidEnter(){
    console.log('cadastro equipamento page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrar
    this.tipoEquipamento = new TipoEquipamento();
  }

  gravar(){
    console.log('TipoEquipamento - gravar ');
    //passar a equipamento que esta sendo cadastrada
    this.tipoEquipamentoService.gravar(this.tipoEquipamento);
    this.routerService.navigate(['lista-tipo-equipamento']);
  }

  cancelar(){
    console.log('TipoEquipamento - cancelar');
    this.tipoEquipamento.nome = null;
    this.tipoEquipamento.dataAquisicao = null;
    this.tipoEquipamento.id = null;
    this.tipoEquipamento.modelo = null;
    this.tipoEquipamento.marca = null;
  }

  listar(){
    console.log('TipoEquipamento - listar');
    this.routerService.navigate(['lista-tipo-equipamento']);
  }

}
