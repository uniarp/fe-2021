import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/services/disciplina.service';

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.page.html',
  styleUrls: ['./lista-disciplinas.page.scss'],
})
export class ListaDisciplinasPage {

  diasDaSemana = { 1: "Domingo", 2: "Segunda-Feira", 3: "Terça-Feira", 4: "Quarta-Feira", 5: "Quinta-Feira", 6: "Sexta-Feira", 7: "Sábado" }
  pesquisa = '';
  disciplinas: any;

  constructor(public disciplinaService: DisciplinaService, public routerService: Router) {
  }

  ngOnInit() {
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

  verDiasSemana(dias) {
    //  console.log(dias);
    return dias.map(dia => this.diasDaSemana[dia]);
  }
}