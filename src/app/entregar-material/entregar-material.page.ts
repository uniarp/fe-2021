import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrega } from '../classes/entrega';
import { MaterialService } from '../services/material.service';
import { EntregaService } from '../services/entrega.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-entregar-material',
  templateUrl: './entregar-material.page.html',
  styleUrls: ['./entregar-material.page.scss'],
})
export class EntregarMaterialPage {

  entrega : Entrega;
  materiais : any;
  professores : any;

  constructor(public entregaService:EntregaService,
    public professorService : ProfessorService,
    public materialService : MaterialService,
    public routerService:Router) {
  }

  ionViewDidEnter() {
    this.entrega = new Entrega();
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
    this.materialService.listar().subscribe(dados => {
      this.materiais = dados;
    });
  }

  cadastrar() {
    this.entrega.usuario = {
      id : 1
    }
    this.entregaService.cadastrar(this.entrega);
    this.routerService.navigate(['lista-entrega-material']);
  }

  cancelar() {
    this.entrega = null;
  }

  listar() {
    this.routerService.navigate(['lista-entrega-material']);
  }

  novo() {
    this.routerService.navigateByUrl('/entregar-material');
  }
}
