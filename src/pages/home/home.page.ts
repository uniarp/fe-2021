import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ReservaEquipamentoService } from 'src/services/reserva-equipamento.service';
import { ReservaSalaService } from 'src/services/reserva-sala.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  comuns = [
    {
      'nome': 'Materiais',
      'link': '/lista-materiais',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Equipamentos',
      'link': '/lista-equipamentos',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Vistorias',
      'link': '/lista-vistorias',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregas de Material',
      'link': '/lista-entregas-material',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregas de Chave',
      'link': '/lista-entregas-chave',
      'icon': 'reader-outline'
    }
  ]
  
  constructor(public routerService: Router) { }

  ionViewWillEnter() {
  }

}

