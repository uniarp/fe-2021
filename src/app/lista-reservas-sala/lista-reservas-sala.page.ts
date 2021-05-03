import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ReservaSalaService } from '../services/reserva-sala.service';

@Component({
  selector: 'app-lista-reservas-sala',
  templateUrl: './lista-reservas-sala.page.html',
  styleUrls: ['./lista-reservas-sala.page.scss'],
})
export class ListaReservasSalaPage {

  reservasSala : any;

  constructor(public reservaSalaService : ReservaSalaService, public routerService : Router, public alertController: AlertController) {
  }

  cancelar (){
    console.log("Cancelando reserva")    
   }

  alterar (){
    console.log("Alterando reserva")    
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({      
      header: 'Aviso',
      subHeader: 'Cancelamento de Reserva',
      message: 'Tem certeza que deseja cancelar a reserva?',
      buttons: ['Sim', 'Não']
    });

    await alert.present();
  }

  novo() {
    this.routerService.navigateByUrl('/solicitar-reserva-sala');
  }

  ionViewWillEnter() {
    this.reservaSalaService.listar().subscribe(dados => {
      this.reservasSala = dados;
    });
  }

}
