import { Curso } from "./curso"

export class Disciplina {
    id:number
    nome:string
    periodo:string
    diasemana:number[]
    curso:Curso

    constructor(){
        this.curso=new Curso();
    }
}