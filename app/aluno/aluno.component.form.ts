import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';


@Component({
    selector: 'aluno',
    templateUrl: 'app/aluno/aluno.template.form.html',
    providers: [AlunoService]
})
export class AlunoComponentForm implements OnInit {
    alunoObject = new Aluno();
    alunos: Aluno[];
    edit = false;
    errorMessage: any;
    private sub: any;

    constructor(private alunoService: AlunoService,
        private router: Router,
        private routeActivated: ActivatedRoute) {

    }



    salvar(aluno): void {
        console.log(aluno);
        if (!aluno.nome) { return; }
        this.alunoService.salvar(aluno)
            .subscribe(
            aluno => this.router.navigate(['aluno']),
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.alunoObject = new Aluno();
            if (id) {
                console.log(id);
                this.alunoService.get(id)
                    .subscribe(
                    aluno => this.alunoObject = aluno,
                    error => this.errorMessage = <any>error
                    );
            }

        });

    }






}
