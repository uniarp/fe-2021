import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  toListed:boolean=false
  constructor() {}
  
  //Abrir ou fechar o submenu listar
  isListed(){
    if(this.toListed==false){
      this.toListed=true
    }else{
      this.toListed=false
    }
  }

  //conteudo sub-menu listar
  listas = [
    {
      'nome':'Lista de cursos',
      'link':'lista-curso',
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
      'nome':'Lista de perguntas',
      'link':'/lista-pergunta',
      'icon':'information-circle-outline',
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
  ];
}
