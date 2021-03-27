import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamento } from '../tipo-equipamento/tipo-equipamento';
import { TipoEquipamentoService } from '../tipo-equipamento.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-tipo-equipamento',
  templateUrl: './cadastro-tipo-equipamento.page.html',
  styleUrls: ['./cadastro-tipo-equipamento.page.scss'],
})
export class CadastroTipoEquipamentoPage {

  httpClient : HttpClient;
  tipoEquipamento: TipoEquipamento;

  constructor(public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router) {
      tipoEquipamentoService = new TipoEquipamentoService(this.httpClient);
  }

  ionViewDidEnter(){
    console.log('cadastro equipamento page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrar
    this.tipoEquipamento = new TipoEquipamento();
  }

  gravar(){
    console.log('TipoEquipamento - gravar ');
    //passar a equipamento que esta sendo cadastrada
    this.tipoEquipamentoService.cadastrar(this.tipoEquipamento);
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

  novo() {
    this.routerService.navigateByUrl('/cadastro-tipo-equipamento')
  }
}