import { Injectable } from '@angular/core';
import { TipoEquipamento } from './tipo-equipamento/tipo-equipamento';

@Injectable({
  providedIn: 'root'
})

export class TipoEquipamentoService {

  constructor() {
    console.log("serviço iniciado");
  }

  alterar(): boolean {
    return null;
  } 

  gravar(tipoEquipamento:TipoEquipamento): boolean {
    console.log('Estou no Service-gravar');
    return null;
  }

  listar(): TipoEquipamento[] {
    return null;
  }

  excluir(): boolean {
    return null;
  }
}
