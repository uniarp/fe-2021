import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SoftwareService } from '../../services/software.service';

@Component({
  selector: 'app-lista-software',
  templateUrl: './lista-software.page.html',
  styleUrls: ['./lista-software.page.scss'],
})
export class ListaSoftwarePage implements OnInit {
  software : any;
  constructor(
    public softwareService:SoftwareService, 
    public routerService:Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.software = [];
  }
  ionViewWillEnter() {
    this.software = [];
      this.softwareService.listar().subscribe(dados => {
        this.software = dados;
        console.log(this.software);
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

  alterar() {

  }

}
