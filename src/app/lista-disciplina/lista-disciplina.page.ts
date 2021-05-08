import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from '../services/disciplina.service';

@Component({
  selector: 'app-lista-disciplina',
  templateUrl: './lista-disciplina.page.html',
  styleUrls: ['./lista-disciplina.page.scss'],
})
export class ListaDisciplinaPage {
  disciplinas : any;

  constructor(
    public disciplinaService:DisciplinaService,
    public routerService:Router
    ) { }

  ngOnInit(){
    this.disciplinas = [];
  }
  
  novo() {
    this.routerService.navigateByUrl('/cadastro-disciplina');
  }

  ionViewWillEnter() {
    this.disciplinas = [];
     this.disciplinaService.listar().subscribe(dados => {
       this.disciplinas = dados;
       console.log(this.disciplinas);
     });
   }
}
