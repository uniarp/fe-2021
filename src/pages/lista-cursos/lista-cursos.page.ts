import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.page.html',
  styleUrls: ['./lista-cursos.page.scss'],
})
export class ListaCursosPage  {

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
