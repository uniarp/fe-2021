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
  salas : any;

  constructor(
    public salaService:SalaService,
    public routerService:Router
    ) { }
    ngOnInit(){
      this.salas = [];
    }
  novo() {
    this.routerService.navigateByUrl('/cadastrar');
  }

  adicionar() {
    this.routerService.navigateByUrl('/cadastro-sala');
  }

  ionViewWillEnter() {
    this.salas = [];
     this.salaService.listarTodos().subscribe(dados => {
       this.salas = dados;
       console.log(this.salas);
     });
   }
}
