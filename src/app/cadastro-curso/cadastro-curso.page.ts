import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../classes/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.page.html',
  styleUrls: ['./cadastro-curso.page.scss'],
})
export class CadastroCursoPage {
 
  curso:Curso

  constructor(
    private cursoService:CursoService,
    private routeService:Router
  ) { }
  
  ionViewWillEnter(){
    this.curso = new Curso()
  }
  cadastrar(curso:Curso){
    return new Promise((resolve,reject)=>{
      this.cursoService.cadastrar(curso).subscribe(response=>{
        resolve(response)
      })
    })
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-curso')
  }
}