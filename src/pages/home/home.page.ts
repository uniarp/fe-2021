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
      'img': '/assets/custom_icons/icon_material.png'
    },
    {
      'nome': 'Equipamentos',
      'link': '/lista-equipamentos',
      'img': '/assets/custom_icons/icon_equipamento.png'
    },
    {
      'nome': 'Vistorias',
      'link': '/lista-vistorias',
      'img': '/assets/custom_icons/icon_vistoria.png'
    },
    {
      'nome': 'Entregas de Material',
      'link': '/lista-entregas-material',
      'img': '/assets/custom_icons/icon_entrega_material.png'
    },
    {
      'nome': 'Entregas de Chave',
      'link': '/lista-entregas-chave',
      'img': '/assets/custom_icons/icon_entrega_chave.png'
    }
  ]
  
  constructor(public routerService: Router) { }

  ionViewWillEnter() {
  }

}

