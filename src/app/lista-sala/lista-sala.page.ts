import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from '../classes/sala';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-lista-sala',
  templateUrl: './lista-sala.page.html',
  styleUrls: ['./lista-sala.page.scss'],
})
export class ListaSalaPage  {
  listaSala : []
  constructor(
    private salaService:SalaService,
    public routerService:Router) {
    
  }
  
  
  ionViewDidEnter(){
    this.salaService.listarTodos().subscribe((salas:any)=>this.listaSala=salas)
    console.log(this.listaSala, "Teste")
  }
  

  alterar(    
    sala:Sala
  ){
    console.log("alteração de sala")
    this.salaService.setSala(sala)
    
  }

  excluir(id:number){
    this.salaService.excluir(id)
  }

  adicionar() {
    this.routerService.navigateByUrl('/cadastro-sala');
  }

}
