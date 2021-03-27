import { Injectable } from '@angular/core';
import { Material} from './material/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { 
    console.log("serviço iniciado");
  }

  alterar(): boolean {
    return null;
  } 

  gravar(material:Material): boolean {
    console.log('Estou no Service-gravar');
    return null;
  }

  listar(): Material[] {
    return null;
  }

  excluir(): boolean {
    return null;
  }
}
