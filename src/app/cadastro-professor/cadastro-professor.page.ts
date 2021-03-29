import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../classes/professor';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
})
export class CadastroProfessorPage implements OnInit {
  professor:Professor={};
  constructor(
    private professorService:ProfessorService,
    private routeService:Router
  ) { }

  ngOnInit() {
  }

  gravar(professor:Professor){
    this.professorService.gravar(professor);
    this.routeService.navigateByUrl('/lista-professor')
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-professor')
  }
}
