import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidenteService } from '../../services/incidente.service';

@Component({
  selector: 'app-lista-incidentes',
  templateUrl: './lista-incidentes.page.html',
  styleUrls: ['./lista-incidentes.page.scss'],
})
export class ListaIncidentesPage {
  pesquisa='';
  incidentes: any;
  constructor(
    public routerService: Router,
    public incidenteService: IncidenteService
  ) { }

  ngOnInit() {
    this.incidentes = [];
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-incidente');
  }

  ionViewWillEnter() {
    this.incidenteService.listar().subscribe(dados => {
      this.incidentes = dados;
      console.log(this.incidentes);
    });
  }
}
