import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.page.html',
  styleUrls: ['./lista-curso.page.scss'],
})
export class ListaCursoPage {

  cursos : any;

  constructor(
    public cursoService:CursoService,
    public routerService:Router
    ) { }

  ngOnInit(){
    this.cursos = [];
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-curso');
  }

  ionViewWillEnter() {
    this.cursos = [];
     this.cursoService.listar().subscribe(dados => {
       this.cursos = dados;
       console.log(this.cursos);
     });
   }
}
