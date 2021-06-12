import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from 'src/services/reserva-equipamento.service';
import { EquipamentoService } from '../../services/equipamento.service';
import { TipoEquipamentoService } from '../../services/tipo-equipamento.service';

@Component({
  selector: 'app-lista-equipamentos-solicitados',
  templateUrl: './lista-equipamentos-solicitados.page.html',
  styleUrls: ['./lista-equipamentos-solicitados.page.scss'],
})
export class ListaEquipamentosSolicitadosPage {
  reservaSolicitadas:any
  constructor(
    public equipamentoService:EquipamentoService,
    public tipoEquipamentoService:TipoEquipamentoService,
    public routerService:Router,
    private reservaequiservice:ReservaEquipamentoService,
  ) { }
  
  novo() {
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }
  ionViewWillEnter() {
    this.reservaequiservice.listaSolicitada().subscribe(dados => {
      this.reservaSolicitadas = dados;
    });
  }
}
