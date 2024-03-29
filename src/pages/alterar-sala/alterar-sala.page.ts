import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from '../../model/sala';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-alterar-sala',
  templateUrl: './alterar-sala.page.html',
  styleUrls: ['./alterar-sala.page.scss'],
})

//REVISAR, não era para ter sido feito para alteração
export class AlterarSalaPage {
 //localizacao: Localizacao=[{'bloco':"Bloco A",'andar':2}]
  
  sala: Sala;
 
  constructor(public salaService:SalaService, public routerService:Router) {
  }

 ionViewWillEnter(){
  
  console.log('Cadastro de Salas - iondidviewENTER');
   //instanciando  objeto da classe que vou cadastrar
   this.sala=new Sala();
 }

 cadastrar(){
   console.log('AlterarSala - cadastrar ');
   //passar a equipamento que esta sendo cadastrada
   this.salaService.cadastrar(this.sala);
   
 }

 cancelar(){
   console.log('CadastroSala - cancelar');
   this.sala = null
 }

 

 listar(){
   console.log('sala - listar');
   this.routerService.navigate(['listarTodos']); }


}
