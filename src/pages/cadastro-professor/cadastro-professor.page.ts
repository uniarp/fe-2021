import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../../model/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
})
export class CadastroProfessorPage {

  professor: Professor;

  constructor(
    private professorService: ProfessorService,
    private routeService: Router
  ) { }

  ionViewWillEnter() {
    this.professor = new Professor()
  }

  cadastrar() {
    this.professorService.cadastrar(this.professor);
  }

  cancelar() {
    this.professor.login = null;
    this.professor.senha = null;
    this.professor.nomecompleto = null;
    this.professor.nivel = null;
    this.professor.email = null;
    this.routeService.navigateByUrl('/home');
  }

  listar() {
    this.routeService.navigateByUrl('/lista-professor');
  }

}
