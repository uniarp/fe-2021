import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../services/equipamento.service';
import { ProfessorService } from '../services/professor.service';
import { TipoEquipamentoService } from '../tipo-equipamento.service';
import { TipoEquipamento } from '../tipo-equipamento/tipo-equipamento';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage{
  tipoEquipamento:TipoEquipamento;
  professor:Professor;
  
  constructor(
    private tipoEquipamentoService: TipoEquipamentoService,
    private professorService: ProfessorService
  ) {

   }

  ionViewWillEnter(){
    
  }
  
  gravar(){this.equipamentoService.cadastrar()}
  excluir(){this.equipamentoService.excluir()}
  alterar(){this.equipamentoService.alterar()}

}
