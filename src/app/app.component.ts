import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  toListed:boolean=false
  toRegister:boolean=false
  toReservation:boolean=false
  toReport:boolean=false
  
  constructor() {}
  
  //Abrir ou fechar o submenu listar
  isListed(){
    if(this.toListed==false){
      this.toListed=true
    }else{
      this.toListed=false
    }
  }

  isRegister(){
    if(this.toRegister==false){
      this.toRegister=true
    }else{
      this.toRegister=false
    }
  }

  isReservation(){
    if(this.toReservation==false){
      this.toReservation=true
    }else{
      this.toReservation=false
    }
  }

  isReport(){
    if(this.toReport==false){
      this.toReport=true
    }else{
      this.toReport=false
    }
  }
  reportares =[
    {
      'nome':'Cadastro Faq',
      'link':'cadastro-faq',
      'icon':'reader-outline',
    },
    {
      'nome':'Faq',
      'link':'faq',
      'icon':'reader-outline',
    },
    {
      'nome':'Lista de perguntas',
      'link':'/lista-pergunta',
      'icon':'information-circle-outline',
    },
    {
      'nome':'Lista de Incidentes Resolvidos',
      'link':'lista-incidentes-resolvidos',
      'icon':'reader-outline',
    },

  ]
   //onteudo sub-menu reservas
     
  reservas =[
    {
      'nome':'Solicitar Material',
      'link':'solicitar-material',
      'icon':'reader-outline',
    },
    {
      'nome':'Entregar Material',
      'link':'entregar-material',
      'icon':'reader-outline',
    },
    {
      'nome':'Solicitar Equipamento',
      'link':'solicitar-equipamento',
      'icon':'reader-outline',
    },
    {
      'nome':'Solicitar Reserva de Sala',
      'link':'solicitar-reserva-sala',
      'icon':'reader-outline',
    },
    
  ]




  //conteudo sub-menu cadastro

  cadastros =[
    {
      'nome':'Cadastro de Equipamento',
      'link':'cadastro-equipamento',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro de Material',
      'link':'cadastro-material',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro de Sala',
      'link':'cadastro-sala',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro de Curso',
      'link':'cadastro-curso',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro de Professor',
      'link':'cadastro-professor',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro Tipo Equipamento',
      'link':'cadastro-tipo-equipamento',
      'icon':'reader-outline',
    },
    {
      'nome':'Cadastro de Vistoria',
      'link':'cadastro-vistoria',
      'icon':'reader-outline',
    },

  ];

  //conteudo sub-menu listar
  listas = [
    {
      'nome':'Lista de cursos',
      'link':'lista-de-cursos',
      'icon':'school',
    },
    {
      'nome':'Lista de disciplinas',
      'link':'',
      'icon':'documents-outline',
    },
    {
      'nome':'Lista de equipamentos',
      'link':'lista-de-equipamentos',
      'icon':'file-tray-stacked-outline',
    },
    {
      'nome':'Lista de materiais',
      'link':'lista-materiais',
      'icon':'layers-outline',
    },
    {
      'nome':'Lista de professores',
      'link':'',
      'icon':'person-outline',
    },
    {
      'nome':'Lista de salas',
      'link':'lista-sala',
      'icon':'reader-outline',
    },
    {
      'nome':'Lista de softwares',
      'link':'lista-software',
      'icon':'reader-outline',
    },
    {
      'nome':'Lista de tipos de equipamento',
      'link':'lista-tipos-equipamento',
      'icon':'reader-outline',
    },
    {
      'nome':'Lista de vistorias',
      'link':'lista-vistoria',
      'icon':'reader-outline',
    },
    {
      'nome':'Adicionar Todas as Paginas a Lista',
      'link':'adicionar-todas-paginas-lista',
      'icon':'reader-outline',
    },
  ];
}
