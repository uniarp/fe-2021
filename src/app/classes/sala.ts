import { Localizacao } from "./localizacao";

export class Sala {
    id?: number;
    numeroSala?: number;
    localizacao?: Localizacao;
    capacidade?: number;
    


    constructor()
     { this.localizacao = new Localizacao();
     }
}
