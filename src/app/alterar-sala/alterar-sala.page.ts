import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from '../classes/sala';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-alterar-sala',
  templateUrl: './alterar-sala.page.html',
  styleUrls: ['./alterar-sala.page.scss'],
})
export class AlterarSalaPage {
 //localizacao: Localizacao=[{'bloco':"Bloco A",'andar':2}]
 sala: Sala;
 
 constructor(
   public salaService:SalaService,
   public routerService:Router
 ) { }

 ionViewWillEnter(){
   console.log('Cadastro de Salas - iondidviewENTER');
   //instanciando  objeto da classe que vou cadastrar
   this.sala=this.salaService.getSala()
   
 }

 gravar(){
   console.log('AlterarSala - gravar ');
   //passar a equipamento que esta sendo cadastrada
   this.salaService.alterar(this.sala);
   
 }

 cancelar(){
   console.log('CadastroSala - cancelar');
   this.sala = null
 }

 

 listarTodos(){
   console.log('sala - listar');
   this.routerService.navigate(['listarTodos']); }


}
