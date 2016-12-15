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
    
    listar(): void {
        this.totalizadorService.fetchAll()
            .subscribe(
            totalizadores => this.totalizadores = totalizadores,
            error => this.errorMessage = <any>error);

    }    
    
     deletar(id, index): void {
           this.i = index;
            this.totalizadorService.deletar(id)
            .subscribe(
            success => this.totalizadores.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

  
   
    
    ngOnInit(): void {
        this.listar();
    }  
    
    
    
}