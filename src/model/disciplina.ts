import { Curso } from "./curso"
import { Professor } from "./professor"

export class Disciplina {
    id:number
    nome:string
    periodo:string
    diaSemana:number[]
    curso:Curso
    professor:Professor

    constructor(){
        this.professor=new Professor();
        this.curso=new Curso();
        // this.diaSemana=[];
    }
}