import { Injectable } from '@angular/core';
import { Professor } from '../classes/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor() { }
  gravar(professor: Professor){}
  alterar(professor: Professor){}
  excluir(professor: Professor){}
  listar(){}

  
}
