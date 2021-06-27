import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/services/professor.service';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.page.html',
  styleUrls: ['./lista-professores.page.scss'],
})
export class ListaProfessoresPage{

  professores : any;

  constructor(
    public professorService:ProfessorService,
    public routerService:Router
  ) { }

  ionViewWillEnter() {
    this.professores = [];
     this.professorService.listar().subscribe(dados => {
       this.professores = dados;
       console.log(this.professores);
     });
   }

  novo() {
    this.routerService.navigateByUrl('/cadastro-professor');
  }
}
