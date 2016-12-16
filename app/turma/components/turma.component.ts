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
    
    constructor(private turmaService: TurmaService) {
    }    

    listar(): void {
        this.turmaService.fetchAll()
            .subscribe(
            turmas => this.turmas = turmas,
            error => this.errorMessage = <any>error);

    }
    deletar(id, index): void {
           this.i = index;
            this.turmaService.deletar(id)
            .subscribe(
            success => this.turmas.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

   
    
    ngOnInit(): void {
        this.listar();
    }  
    
    
    
}