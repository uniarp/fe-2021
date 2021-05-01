import { Localizacao } from "./localizacao"
import { Professor } from "./professor"
import { Sala } from "./sala"

export class Incidente { 
    id:number
    descricao?:string
    dataAbertura?:Date
    status?:string
    dataFechamento?:Date
    resolucao?:string
    sala?:Sala
    localizacao?:Localizacao
    professor?:Professor

    constructor(){
        this.sala=new Sala();
        this.localizacao=new Localizacao();
        this.professor=new Professor();

    }

}
