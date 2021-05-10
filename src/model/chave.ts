import { Sala } from "./sala";

export class Chave {
    
  id? : Number;
  sala? : Sala;
  
  constructor() {
    this.sala = new Sala();
  }

}
