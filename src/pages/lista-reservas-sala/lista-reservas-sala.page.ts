import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EntregaChaveService } from 'src/services/entrega-chave.service';
import { ReservaSalaService } from '../../services/reserva-sala.service';

@Component({
  selector: 'app-lista-reservas-sala',
  templateUrl: './lista-reservas-sala.page.html',
  styleUrls: ['./lista-reservas-sala.page.scss'],
})
export class ListaReservasSalaPage {
  
  pesquisa = '';
  reservasSala : {}
  private entregaChave:any;
  alert:any
  emHome : boolean;

  constructor(
    public reservaSalaService : ReservaSalaService,
    public routerService : Router, 
    public alertController: AlertController,
    private entregaChaveService:EntregaChaveService
  ) {
    this.emHome = this.routerService.url == "/home/lista-reservas-sala";
    let data = new Date();
    this.pesquisa = `${(data.getFullYear())}-${('0'+(data.getMonth()+ 1)).slice(-2)}-${('0'+(data.getDate())).slice(-2)}`;
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

  novo() {
    this.routerService.navigateByUrl('/solicitar-reserva-sala');
  }

  ionViewWillEnter() {
    this.reservasSala = [];
    this.reservaSalaService.listar().subscribe(dados => {
      this.reservasSala = dados;
      console.log("🚀this.reservasSala", this.reservasSala)
    });
  }

  EntregaChave(id_reservaSala:number) {
    this.alertEntregarDevolver("Você está confirmando uma entrega de chave, deseja continuar?","Entrega de chave").then((resposta)=>{
      if(resposta==true){
        let data = new Date().toLocaleString()
        const entrega={
          "reservasala":id_reservaSala,
          "dataHoraEntrega":data,
          "status":"entregue"
        }
        console.log("🚀 ~ ~ entrega", entrega)
        this.entregaChaveService.cadastrar(entrega).then(()=>{
          this.reservaSalaService.listar().subscribe(dados => {
            this.reservasSala = dados;
          });
        })
      }
    })
  }

  devolverChave(id_reservaSala:number):void{
    this.alertEntregarDevolver("Você está confirmando uma devolução de chave, deseja continuar?","Devolução de chave").then((resposta)=>{
      if(resposta==true){
        let data = new Date().toLocaleString();
        const dados={
          "status":"devolvida",
          "dataDevolucao": data
        }
        this.entregaChaveService.alterarStatus(id_reservaSala,dados).then(()=>{
          this.reservaSalaService.listar().subscribe(dados => {
            this.reservasSala = dados;
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
