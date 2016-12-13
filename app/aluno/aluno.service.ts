import { Injectable } from '@angular/core';
import { Aluno } from './aluno';


@Injectable()
export class AlunoService {
    alunos = [];
    getListAluno(): Promise<Aluno[]> {
        this.alunos = [{ nome: 'João ', curso: 'Direito', professor: 'Maria', matricula: 100 },
        { nome: 'Roberta ', curso: 'Direito', professor: 'Maria', matricula: 200 },
        { nome: 'Augusto ', curso: 'Direito', professor: 'Maria', matricula: 300 }
        ];
        return Promise.resolve(this.alunos);
    }




}


