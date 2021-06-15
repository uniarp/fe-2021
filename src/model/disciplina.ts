import { Curso } from "./curso"
<<<<<<< HEAD
=======
import { Professor } from "./professor"
>>>>>>> origin

export class Disciplina {
    id:number
    nome:string
    periodo:string
<<<<<<< HEAD
    diasemana:number[]
    curso:Curso

    constructor(){
        this.curso=new Curso();
=======
    diaSemana:number[]
    curso:Curso
    professor:Professor

    constructor(){
        this.professor=new Professor();
        this.curso=new Curso();
        // this.diaSemana=[];
>>>>>>> origin
    }
}