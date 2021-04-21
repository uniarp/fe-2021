import { Localizacao } from "./localizacao";

export class Sala {
    
  id?: Number;
  numero?: Number;
  localizacao?: Localizacao;
  capacidade?: Number;
    
  constructor() {
    this.localizacao = new Localizacao();
  }

}
