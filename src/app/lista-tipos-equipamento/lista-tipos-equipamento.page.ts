import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamentoService } from '../../services/tipo-equipamento.service'

@Component({
  selector: 'app-lista-tipos-equipamento',
  templateUrl: './lista-tipos-equipamento.page.html',
  styleUrls: ['./lista-tipos-equipamento.page.scss'],
})

  export class ListaTiposEquipamentoPage {
      
    tiposEquipamento : any;

  constructor(
    public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router
    ) { }

  novo() {
    this.routerService.navigateByUrl('/cadastro-tipo-equipamento');
  }

  ionViewWillEnter() {
    this.tiposEquipamento=[];
    this.tipoEquipamentoService.listar().subscribe(dados => {
      this.tiposEquipamento = dados;
    });
  }
}
