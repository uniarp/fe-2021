import { Material } from "./material";
import { Professor } from "./professor";
import { Usuario } from "./usuario";

export class Entrega {

  id : Number;
  data : Date;
  qtd : Number;
  professor : Professor;
  material : Material;
  usuario : Usuario;
    
  constructor() {
    this.professor = new Professor();
    this.material = new Material();
    this.usuario = new Usuario();
  }

}
