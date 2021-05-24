import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/model/curso';
import { Disciplina } from 'src/model/disciplina';
import { CursoService } from 'src/services/curso.service';
import { DisciplinaService } from 'src/services/disciplina.service';
import { ProfessorService } from 'src/services/professor.service';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.page.html',
  styleUrls: ['./cadastro-disciplina.page.scss'],
})
export class CadastroDisciplinaPage {

  disciplina:Disciplina
  cursos:any;
  professores:any;
  constructor(
    private cursoService:CursoService,
    private professorService:ProfessorService,
    private disciplinaService:DisciplinaService,
    private routeService:Router
  ) { }
  
  ionViewWillEnter(){
    this.disciplina = new Disciplina();
    this.cursoService.listar().subscribe(dados => {
      this.cursos = dados;
    });    
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
  }

  cadastrar(disciplina:Disciplina){
    console.log(this.disciplina); 
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