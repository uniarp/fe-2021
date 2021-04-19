import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Localizacao } from '../classes/localizacao';
import { Sala } from '../classes/sala';
import { SalaService } from '../services/sala.service';


@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.page.html',
  styleUrls: ['./cadastro-sala.page.scss'],
})
export class CadastroSalaPage {
  //localizacao: Localizacao=[{'bloco':"Bloco A",'andar':2}]
  sala: Sala;

  constructor(
    public salaService:SalaService,
    public routerService:Router
  ) { }

  ionViewDidEnter(){
    console.log('Cadastro de Salas - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrar
    this.sala = new Sala();
  }

  cadastrar(){ //alterado gravar para cadastrar
    console.log(this.sala);
    //return new Promise((resolve, reject) => {
    this.salaService.cadastrar(this.sala);
    this.routerService.navigate(['lista-sala']); 
    
    //})
    //passar a equipamento que esta sendo cadastrada - Jogado para o Service
    //  this.salaService.cadastrar(this.sala).subscribe(response=>{
    // resolve(response);})
   
  }

  cancelar(){
    console.log('CadastroSala - cancelar');
    this.sala = null
  }

  

  listar(){
    console.log('sala - listar');
    this.routerService.navigate(['lista-sala']);
  }



}
