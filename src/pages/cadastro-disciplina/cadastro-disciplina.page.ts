import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { Curso } from 'src/model/curso';
import { Disciplina } from 'src/model/disciplina';
import { CursoService } from 'src/services/curso.service';
import { DisciplinaService } from 'src/services/disciplina.service';
import { ProfessorService } from 'src/services/professor.service';
>>>>>>> origin

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.page.html',
  styleUrls: ['./cadastro-disciplina.page.scss'],
})
export class CadastroDisciplinaPage {

<<<<<<< HEAD
  constructor(public routerService : Router) { }
=======
  disciplina : Disciplina;
  cursos : any;
  professores : any;
>>>>>>> origin

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

<<<<<<< HEAD
  cancelar() {
    this.routerService.navigateByUrl('/home')
  }

}
=======
  cadastrar() {
    console.log(this.disciplina); 
    this.disciplinaService.cadastrar(this.disciplina).then(()=>{
    this.routeService.navigateByUrl('/lista-disciplinas');
    })
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-disciplinas')
  }
}
>>>>>>> origin
