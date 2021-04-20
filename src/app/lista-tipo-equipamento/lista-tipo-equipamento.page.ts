import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamentoService } from '../services/tipo-equipamento.service'

@Component({
  selector: 'app-lista-tipo-equipamento',
  templateUrl: './lista-tipo-equipamento.page.html',
  styleUrls: ['./lista-tipo-equipamento.page.scss'],
})

  export class ListaTipoEquipamentoPage {
      tipoEquipamento : any;

  constructor(
    public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router
    ) { }

  novo() {
    this.routerService.navigateByUrl('/cadastro-tipo-equipamento');
  }

  ionViewDidEnter() {
    this.tipoEquipamento=[];
    this.tipoEquipamentoService.listar().subscribe(dados => {
    this.tipoEquipamento = dados;
    console.log(this.tipoEquipamento);
    });
  }
}
