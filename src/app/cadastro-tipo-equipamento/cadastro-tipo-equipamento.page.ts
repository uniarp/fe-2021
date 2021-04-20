import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamento } from '../classes/tipo-equipamento';
import { TipoEquipamentoService } from '../services/tipo-equipamento.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-tipo-equipamento',
  templateUrl: './cadastro-tipo-equipamento.page.html',
  styleUrls: ['./cadastro-tipo-equipamento.page.scss'],
})
export class CadastroTipoEquipamentoPage {

  tipoEquipamento: TipoEquipamento;

  constructor(public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router) {
  }

  ionViewDidEnter(){
    console.log('cadastro equipamento page - iondidviewENTER');
    this.tipoEquipamento = new TipoEquipamento();
  }

  /**
   * Método de cadastro de Salas
   */
  cadastrar() {
    this.tipoEquipamentoService.cadastrar(this.tipoEquipamento);
    this.routerService.navigate(['lista-tipo-equipamento']);
  }

  cancelar(){
    this.tipoEquipamento = null;
  }

  listar(){
    this.routerService.navigate(['lista-tipo-equipamento']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-tipo-equipamento');
  }
}