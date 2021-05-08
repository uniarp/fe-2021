import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../classes/professor';
import { ProfessorService } from '../services/professor.service';

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
  cadastrar(professor:Professor){
    return new Promise((resolve,reject)=>{
      this.professorService.cadastrar(professor).subscribe(response=>{
        resolve(response)
      })
    })
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-professor')
  }
}
