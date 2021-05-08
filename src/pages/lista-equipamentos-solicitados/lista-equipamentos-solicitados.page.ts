import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from '../../services/equipamento.service';
import { TipoEquipamentoService } from '../../services/tipo-equipamento.service';

@Component({
  selector: 'app-lista-equipamentos-solicitados',
  templateUrl: './lista-equipamentos-solicitados.page.html',
  styleUrls: ['./lista-equipamentos-solicitados.page.scss'],
})
export class ListaEquipamentosSolicitadosPage {
  tipoEquipamento:any
  constructor(
    public equipamentoService:EquipamentoService,
    public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router
  ) { }
  
  novo() {
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }
  ionViewWillEnter() {
    this.tipoEquipamentoService.listar().subscribe(dados => {
      this.tipoEquipamento = dados;
      console.log(this.tipoEquipamento);
    });
  }
}
