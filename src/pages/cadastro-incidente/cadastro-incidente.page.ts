import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidente } from '../../model/incidente';
import { IncidenteService } from '../../services/incidente.service';
import { ProfessorService } from '../../services/professor.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-cadastro-incidente',
  templateUrl: './cadastro-incidente.page.html',
  styleUrls: ['./cadastro-incidente.page.scss'],
})
export class CadastroIncidentePage {

  incidente: Incidente;
  salas: any;
  professores: any;

  constructor(
    public incidenteService: IncidenteService,
    public routerService: Router,
    public salaService: SalaService,
    public professorService: ProfessorService
  ) { }

  ionViewDidEnter() {
    this.incidente = new Incidente();
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
      console.log(this.professores);
    });
    this.salaService.listar().subscribe(dados => {
      this.salas = dados;
      console.log(this.salas);
    });
  }
  cadastrar() {
    this.incidente.status = "Aberto";
    this.incidenteService.cadastrar(this.incidente);
    console.log(this.incidente);
    this.routerService.navigate(['lista-incidentes']);
  }

  cancelar() {
    this.incidente.status = null;
    this.incidente.tempoabertura = null;
    this.incidente.descricao = null;
    this.incidente.tempofechamento = null;
    this.routerService.navigate(['/home']);
  }

  listar() {
    this.routerService.navigate(['lista-incidentes']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-incidente');
  }




}


