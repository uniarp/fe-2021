import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Material } from '../../model/material';
import { EntregaService } from 'src/services/entrega.service';

@Component({
  selector: 'app-lista-entregas-material',
  templateUrl: './lista-entregas-material.page.html',
  styleUrls: ['./lista-entregas-material.page.scss'],
})
export class ListaEntregasMaterialPage  {

  entregasMaterial: any;

  constructor(public entregaService: EntregaService, public routerService: Router) {
  }


  ionViewWillEnter() {
    this.entregaService.listar().subscribe(dados => {
      this.entregasMaterial = dados;
      console.log(this.entregasMaterial);
    });
  }
  
  novo() {
    this.routerService.navigateByUrl('/cadastro-entrega-material');
  }

  alterar(id: Number, material: Material){
    this.entregaService.alterar(id, this.entregasMaterial);
    console.log(this.alterar);
  }

  excluir(id: Number){
    this.entregaService.excluir(id);
    console.log(this.excluir);
  }
}

