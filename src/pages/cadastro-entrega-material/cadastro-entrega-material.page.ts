import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Entrega } from '../../model/entrega';
import { MaterialService } from '../../services/material.service';
import { EntregaService } from '../../services/entrega.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-entrega-material',
  templateUrl: './cadastro-entrega-material.page.html',
  styleUrls: ['./cadastro-entrega-material.page.scss'],
})
export class CadastroEntregaMaterialPage {

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
    this.routerService.navigate(['lista-entregas-material']);
  }

  cancelar() {
    this.entrega = null;
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    this.routerService.navigate(['lista-entregas-material']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-entrega-material');
  }
}
