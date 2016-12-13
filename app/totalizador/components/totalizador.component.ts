import { Component, OnInit  } from '@angular/core';
import { Totalizador } from '../class/totalizador';
import { TotalizadorService } from '../service/totalizador.service';


@Component({
    selector: 'totalizador',
    templateUrl: 'app/totalizador/templates/totalizador.template.html',
    providers: [TotalizadorService]
})

export class TotalizadorComponent implements OnInit  {
    totalizadores: Totalizador[];
    totalizadorObject = new Totalizador();
    edit = false;
    errorMessage: any;
    i:number;
    
    constructor(private totalizadorService: TotalizadorService) {
    }    
    
     deletar(id, index): void {
           this.i = index;
            this.totalizadorService.deletar(id)
            .subscribe(
            success => this.totalizadores.splice(this.i, 1),
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

    popularLista(totalizador: Totalizador) {
        this.totalizadores.push(totalizador);
        this.totalizadorObject = new Totalizador();
    }
    editar(totalizador: Totalizador, persistir = false): void {

        this.edit = true;
        this.totalizadorObject = totalizador;
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
        this.totalizadorObject = new Totalizador();
        this.edit = false;
    }
    
    
    listar(): void {
        this.totalizadorService.getList()
            .subscribe(
            totalizadores => this.totalizadores = totalizadores,
            error => this.errorMessage = <any>error);

    }
   
    
    ngOnInit(): void {
        this.listar();
    }  
    
    
    
}