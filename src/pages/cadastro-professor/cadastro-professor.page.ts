import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../../model/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
})
export class CadastroProfessorPage {
  
  professor:Professor;
  
  constructor(
    private professorService:ProfessorService,
    private routeService:Router
  ) { }
 

  ionViewWillEnter(){
    this.professor = new Professor()
  }
  cadastrar() {
    this.professorService.cadastrar(this.professor);
    this.routeService.navigate(['lista-professor']);
  } 

  cancelar(){
    this.routeService.navigateByUrl('/lista-professor')
  }
  listar() {
    this.routeService.navigate(['lista-professor']);
  }

}
