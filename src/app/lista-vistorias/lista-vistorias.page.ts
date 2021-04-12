import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VistoriaService } from '../services/vistoria.service';

@Component({
  selector: 'app-lista-vistorias',
  templateUrl: './lista-vistorias.page.html',
  styleUrls: ['./lista-vistorias.page.scss'],
})
export class ListaVistoriasPage {

  vistoria : any;

  constructor(
    public vistoriaService : VistoriaService,
    public routerService : Router
  ) { }

  novo() {
    this.routerService.navigateByUrl('cadastro-vistoria');
  }

  ionVieWillEnter() {
    this.vistoriaService.listar();
  }
}
