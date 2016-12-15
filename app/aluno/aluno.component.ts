import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';


@Component({
    selector: 'aluno',
    templateUrl: 'app/aluno/aluno.template.html',
    providers: [AlunoService]
})
export class AlunoComponent implements OnInit {
    alunoObject = new Aluno();
    alunos: Aluno[];
    edit = false;
    errorMessage: any;
    i: number;

    constructor(private alunoService: AlunoService) {

    }

    listar(): void {
        this.alunoService.fetchAll()
            .subscribe(
            alunos => this.alunos = alunos,
            error => this.errorMessage = <any>error);

    }


    deletar(id, index): void {
        this.i = index;
        this.alunoService.deletar(id)
            .subscribe(
            success => this.alunos.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }


    ngOnInit(): void {
        this.listar();
    }






}
