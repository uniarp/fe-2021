import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from '../../services/equipamento.service';

@Component({
  selector: 'app-lista-equipamentos',
  templateUrl: './lista-equipamentos.page.html',
  styleUrls: ['./lista-equipamentos.page.scss'],
})
export class ListaEquipamentosPage  {
  pesquisa = '';
  equipamentos: any;
  
  constructor(
    private routeService:Router,
    private equipamentoService:EquipamentoService
  ) { }

  ionViewDidEnter() {
    this.equipamentos= [];
    this.equipamentoService.listar().subscribe(dados => {
      this.equipamentos= dados;
      console.log(this.equipamentos);
    });
  }
  
  novo() {
    this.routeService.navigateByUrl('/cadastro-equipamento')
  }

}


