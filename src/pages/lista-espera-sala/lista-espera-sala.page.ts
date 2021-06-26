import { Component, OnInit } from '@angular/core';
import { ReservaSalaService } from 'src/services/reserva-sala.service';

@Component({
  selector: 'app-lista-espera-sala',
  templateUrl: './lista-espera-sala.page.html',
  styleUrls: ['./lista-espera-sala.page.scss'],
})
export class ListaEsperaSalaPage implements OnInit {
  reservas:any;
  constructor(
    private reservaSalaService:ReservaSalaService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.reservaSalaService.listaSolicitada().subscribe(dados=>{
      this.reservas=dados;
    })
  }
}
