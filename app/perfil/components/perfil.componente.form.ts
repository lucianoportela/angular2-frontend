import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Perfil } from '../class/perfil';
import { PerfilService } from '../service/perfil.service';


@Component({
    selector: 'perfil',
    templateUrl: 'app/perfil/templates/perfil.template.form.html',
    providers: [PerfilService]
})
export class PerfilComponentForm implements OnInit {


    perfilObject = new Perfil();
    perfis: Perfil[];
    edit = false;

    errorMessage: any;
    i: number;
    private sub: any;

    constructor(private perfilService: PerfilService,
        private router: Router,
        private routeActivated: ActivatedRoute) {

    }


    salvar(perfil): void {
        if (!perfil.nome) { return; }
        this.perfilService.salvar(perfil)
            .subscribe(
            perfil => this.router.navigate(['perfil']),
            error => this.errorMessage = <any>error
            );

    }




    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.perfilObject = new Perfil();
            if (id) {
                console.log(id);
                this.perfilService.get(id)
                    .subscribe(
                    usuario => this.perfilObject = usuario,
                    error => this.errorMessage = <any>error
                    );
            }
        });
    }

}
