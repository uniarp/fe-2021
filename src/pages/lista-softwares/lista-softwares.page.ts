import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SoftwareService } from '../../services/software.service';

@Component({
  selector: 'app-lista-softwares',
  templateUrl: './lista-softwares.page.html',
  styleUrls: ['./lista-softwares.page.scss'],
})
export class ListaSoftwaresPage implements OnInit {
  
  softwares: any;
  constructor(
    public softwareService: SoftwareService,
    public routerService: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.softwares = [];
  }
  ionViewWillEnter() {
    this.softwares = [];
    this.softwareService.listar().subscribe(dados => {
      this.softwares = dados;
    });
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-software');
  }
  
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Exclusão de Software',
      message: 'Tem certeza que deseja excluir o software?',
      buttons: [
        {
          text: 'Calcelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // rota backend
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            // rota backend
            console.log('Confirm Ok');
          }
        }
      ]

    });
    await alert.present();
  }

}
