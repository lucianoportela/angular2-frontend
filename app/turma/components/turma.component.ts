import { Component, OnInit  } from '@angular/core';
import { Turma } from '../class/turma';
import { TurmaService } from '../service/turma.service';


@Component({
    selector: 'turma',
    templateUrl: 'app/turma/templates/turma.template.html',
    providers: [TurmaService]
})

export class TurmaComponent implements OnInit  {
    turmas: Turma[];
    turmaObject = new Turma();
    edit = false;
    errorMessage: any;
    i:number;
    
    constructor(private totalizadorService: TurmaService) {
    }    
    
     deletar(id, index): void {
           this.i = index;
            this.totalizadorService.deletar(id)
            .subscribe(
            success => this.turmas.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvar(totalizador): void {
        if (!totalizador.descricao) { return; }
        this.totalizadorService.salvar(totalizador)
            .subscribe(
            totalizador => this.popularLista(totalizador),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(totalizador: Turma) {
        this.turmas.push(totalizador);
        this.turmaObject = new Turma();
    }
    editar(totalizador: Turma, persistir = false): void {

        this.edit = true;
        this.turmaObject = totalizador;
        if (persistir) {
            if (!totalizador.descricao) { return; }
            this.totalizadorService.salvar(totalizador)
                .subscribe(
                totalizador => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }

    }
    atualizarFormulario(): void {
        this.turmaObject = new Turma();
        this.edit = false;
    }
    
    
    listar(): void {
        this.totalizadorService.getList()
            .subscribe(
            turmas => this.turmas = turmas,
            error => this.errorMessage = <any>error);

    }
   
    
    ngOnInit(): void {
        this.listar();
    }  
    
    
    
}