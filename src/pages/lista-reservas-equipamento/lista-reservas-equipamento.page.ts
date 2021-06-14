import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';

@Component({
  selector: 'app-lista-reservas-equipamentos',
  templateUrl: './lista-reservas-equipamento.page.html',
  styleUrls: ['./lista-reservas-equipamento.page.scss'],
})
export class ListaReservasEquipamentoPage {
  
  pesquisa = '';
  reservasEquipamento : any;
  
  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    public routerService:Router
  ) {
    let data = new Date();
    this.pesquisa = `${(data.getFullYear())}-${('0'+(data.getMonth()+ 1)).slice(-2)}-${('0'+(data.getDate())).slice(-2)}`
   }

  novo(){
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }

  ionViewWillEnter() {
    this.reservasEquipamento = [];
    this.reservaEquipamentoService.listar().subscribe(dados => {
      this.reservasEquipamento = dados;
    });
  }
}
