import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../services/equipamento.service';

@Component({
  selector: 'app-solicitar-equipamento',
  templateUrl: './solicitar-equipamento.page.html',
  styleUrls: ['./solicitar-equipamento.page.scss'],
})
export class SolicitarEquipamentoPage implements OnInit {

  constructor(
    private equipamentoService: EquipamentoService
  ) {

   }

  ngOnInit() {
  }
  gravar(){this.equipamentoService.cadastrar()}
  excluir(){this.equipamentoService.excluir()}
  alterar(){this.equipamentoService.alterar()}

}
