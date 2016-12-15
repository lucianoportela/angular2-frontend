import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Totalizador } from '../class/totalizador';
import { TotalizadorService } from '../service/totalizador.service';


@Component({
    selector: 'totalizador',
    templateUrl: 'app/totalizador/templates/totalizador.template.form.html',
    providers: [TotalizadorService]
})

export class TotalizadorComponentForm implements OnInit {
    totalizadores: Totalizador[];
    totalizadorObject = new Totalizador();
    edit = false;
    errorMessage: any;
    i: number;
    private sub: any;

    constructor(private totalizadorService: TotalizadorService,
        private router: Router,
        private routeActivated: ActivatedRoute) {
    }



    salvar(totalizador): void {
        if (!totalizador.descricao) { return; }
        this.totalizadorService.salvar(totalizador)
            .subscribe(
            totalizador => this.router.navigate(['totalizador']),
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.totalizadorObject = new Totalizador();
            if (id) {
                console.log(id);
                this.totalizadorService.get(id)
                    .subscribe(
                    totalizador => this.totalizadorObject = totalizador,
                    error => this.errorMessage = <any>error
                    );
            }

        });

    }



}