import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Usuario } from '../class/usuario';
import { Perfil } from '../../perfil/class/perfil';
import { UsuarioService } from '../service/usuario.service';
import { PerfilService } from '../../perfil/service/perfil.service';
import { CorreiosService } from '../../correios/service/correios.service';




@Component({
    selector: 'usuario-form',
        templateUrl: 'app/usuario/templates/usuario.template.form.html',
    providers: [UsuarioService, PerfilService, CorreiosService]
})

export class UsuarioComponentForm implements OnInit {
    usuarios: Usuario[];
    perfis: Perfil[];
    private sub: any;

    usuarioObject = new Usuario();


    edit = false;
    errorMessage: any;
    i: number;

    constructor(private usuarioService: UsuarioService,
        private perfilService: PerfilService,
        private correiosService: CorreiosService,
        private router: Router,
        private routeActivated: ActivatedRoute) {
    }

    onChange(cep): void {

        if (cep != null) {
            if (cep.toString().length === 8) {
                this.correiosService.getCep(cep)
                    .subscribe(
                    response => this.popularLogadouro(response)
                    );
            }
        }
    }

    popularLogadouro(response) {
        this.usuarioObject.endereco =
            " " + response.logradouro +
            " " + response.bairro;
    }


    listarPerfil(): void {
        this.perfilService.fetchAll()
            .subscribe(
            response => this.popularPerfis(response),
            error => this.errorMessage = <any>error);

    }
    popularPerfis(perfis): void {
        this.perfis = perfis;
        this.usuarioObject.perfil = this.perfis[0];
    }

    salvar(usuario): void {
        if (!usuario.nome) { return; }
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.router.navigate(['usuario']),
            error => this.errorMessage = <any>error
            );
    }







    ngOnInit(): void {
        this.listarPerfil();


        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.usuarioObject = new Usuario();
            if (id) {
                console.log(id);
                this.usuarioService.get(id)
                    .subscribe(
                    usuario => this.usuarioObject = usuario,
                    error => this.errorMessage = <any>error
                    );
            }

        });

    }



}
