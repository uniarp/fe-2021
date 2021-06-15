import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../model/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.page.html',
  styleUrls: ['./cadastro-curso.page.scss'],
})
export class CadastroCursoPage {

  curso: Curso;

  constructor(public cursoService:CursoService,
    public routerService:Router) { }

    ionViewDidEnter(){
      console.log('Cadastro Cruso page - iondidviewENTER');
      this.curso = new Curso();
    }
  
    cadastrar(){
      console.log('Curso - cadastrar ');
      //passar a equipamento que esta sendo cadastrada
      this.cursoService.cadastrar(this.curso);
      this.routerService.navigate(['lista-de-cursos']);
    }
  
    cancelar() {
      this.curso = null;
      this.routerService.navigateByUrl('/home')

    }
  
    listar(){
      console.log('Curso - listar');
      this.routerService.navigate(['lista-de-cursos']);
    }

}
