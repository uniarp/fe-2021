import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../services/equipamento.service';

@Component({
  selector: 'app-lista-de-equipamentos',
  templateUrl: './lista-de-equipamentos.page.html',
  styleUrls: ['./lista-de-equipamentos.page.scss'],
})
export class ListaDeEquipamentosPage  {
equipamentos: any;
  constructor(
    private routeService:Router,
    private equipamentoService:EquipamentoService
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.equipamentoService.listarEquipamento().subscribe(
      resultado => {
        console.log(resultado)
        this.equipamentos = resultado;
      },
      erro => {
       if(erro.status == 404) {
         console.log('Lista de Equipamentos');
       }
     }
   );

    //this.perguntas=this.perguntaService.listar();
  }

  novo() {
    this.routeService.navigateByUrl('/cadastro-equipamento')
  }

  editar(equipamentos:Equipamento) {
    this.equipamentoService.alterar()
  }

  excluir(equipamentos:Equipamento) {
    this.equipamentoService.excluir()
  }
}


