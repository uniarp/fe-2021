import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-lista-de-cursos',
  templateUrl: './lista-de-cursos.page.html',
  styleUrls: ['./lista-de-cursos.page.scss'],
})
export class ListaDeCursosPage  {

  curso: any;

  constructor(
    private routeService:Router,
    private cursoService:CursoService
  ) { }

  ionViewDidEnter() {
    this.curso= [];
    this.cursoService.listar().subscribe(dados => {
      this.curso= dados;
      console.log(this.curso);
    });
  }
  
  novo() {
    this.routeService.navigateByUrl('/cadastro-curso')
  }
}
