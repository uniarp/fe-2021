import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/model/professor';
import { ProfessorService } from '../../services/professor.service'

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.page.html',
  styleUrls: ['./lista-professor.page.scss'],
})
export class ListaProfessorPage  {

  professor : any;
  constructor(
    public professorService:ProfessorService,
    public routerService:Router
  ) { }

  novo() {
    this.routerService.navigateByUrl('/cadastro-professor');
  }

  ionViewWillEnter() {
    this.professor=[];
    this.professorService.listar().subscribe(dados => {
      this.professor = dados;
    });
 
  }
}
