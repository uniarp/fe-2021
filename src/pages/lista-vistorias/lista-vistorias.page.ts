import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from 'src/services/equipamento.service';
import { SalaService } from 'src/services/sala.service';
import { VistoriaService } from '../../services/vistoria.service';

@Component({
  selector: 'app-lista-vistorias',
  templateUrl: './lista-vistorias.page.html',
  styleUrls: ['./lista-vistorias.page.scss'],
})
export class ListaVistoriasPage {

  vistorias: any;
  pesquisa = '';

  constructor(public vistoriaService: VistoriaService,
    public routerService: Router) {
  }

  ngOnInit() {
    this.vistorias = [];
  }

  novo() {
    this.routerService.navigateByUrl('cadastro-vistoria');
  }

  ionViewWillEnter() {
    this.vistoriaService.listar().subscribe(dados => {
      this.vistorias = dados;
      console.log(this.vistorias);
    })
  }
}
