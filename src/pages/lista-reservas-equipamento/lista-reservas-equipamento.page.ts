import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaEquipamentoService } from '../../services/reserva-equipamento.service';
import { AlertController } from '@ionic/angular';
import { EntregaService } from 'src/services/entrega.service';

@Component({
  selector: 'app-lista-reservas-equipamentos',
  templateUrl: './lista-reservas-equipamento.page.html',
  styleUrls: ['./lista-reservas-equipamento.page.scss'],
})
export class ListaReservasEquipamentoPage {
  pesquisa = '';
  reservasEquipamento : any;
  alert: any;

  constructor(
    public reservaEquipamentoService:ReservaEquipamentoService,
    public alertController: AlertController,
    public routerService:Router,
    public entregaService:EntregaService
  ) { }

  novo(){
    this.routerService.navigateByUrl('/solicitar-equipamento');
  }

  ionViewWillEnter() {
    this.reservasEquipamento = [];
    this.reservaEquipamentoService.listar().subscribe(dados => {
      this.reservasEquipamento = dados;
    });
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Cancelamento de Reserva',
      message: 'Tem certeza que deseja cancelar a reserva?',
      buttons: [
        {
          text: 'Cancelar',
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
  entregaEquipamento(id_equipamento:number) {
    this.alertEntregarDevolver("Você está confirmando uma entrega de equipamento, deseja continuar?","Entrega de equipamento").then((resposta)=>{
      if(resposta==true){
        let data = new Date().toLocaleString()
        const entrega={
          "entregaEquipamento":id_equipamento,
          "status":"entregue"
        }
        console.log("🚀 ~ ~ entrega", entrega)
        this.reservaEquipamentoService.cadastrar(entrega).then(()=>{
          this.reservaEquipamentoService.listar().subscribe(dados => {
            this.reservasEquipamento = dados;
          });
        })
      }
    })
  }
  devolverEquipamento(id_equipamento:number):void{
    this.alertEntregarDevolver("Você está confirmando uma devolução de equipamento, deseja continuar?","Devolução de equipamento").then((resposta)=>{
      if(resposta==true){
        let data = new Date().toLocaleString();
        const dados={
          "status":"devolver",
        }
        this.reservaEquipamentoService.alterar(id_equipamento,dados).then(()=>{
          this.reservaEquipamentoService.listar().subscribe(dados => {
            this.reservasEquipamento = dados;
          });
        })
      }
    })
  }

  async alertEntregarDevolver(message:string,header:string): Promise<boolean> {
    let resultado: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resultado = resolve;
    });
    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
          role:'cancel',
          handler: () => resultado(false)
        },
        {
          text: 'Continuar',
          handler: () => resultado(true)
        }
      ]
    });
    await alert.present();
    return promise;
  }
}

