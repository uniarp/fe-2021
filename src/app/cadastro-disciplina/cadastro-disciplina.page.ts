import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../classes/curso';
import { Disciplina } from '../classes/disciplina';
import { CursoService } from '../services/curso.service';
import { DisciplinaService } from '../services/disciplina.service';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.page.html',
  styleUrls: ['./cadastro-disciplina.page.scss'],
})
export class CadastroDisciplinaPage {

  disciplina:Disciplina
  cursos:any;
  constructor(
    private cursoService:CursoService,
    private disciplinaService:DisciplinaService,
    private routeService:Router
  ) { }
  
  ionViewWillEnter(){
    this.disciplina = new Disciplina();
    this.cursoService.listar().subscribe(dados => {
      this.cursos = dados;
    });
  }

  cadastrar(disciplina:Disciplina){
    return new Promise((resolve,reject)=>{
      this.disciplinaService.cadastrar(disciplina).subscribe(response=>{
        resolve(response)
      })
    })
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-disciplina')
  }
}
