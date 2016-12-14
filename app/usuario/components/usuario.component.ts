import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Perfil } from '../../perfil/class/perfil';
import { UsuarioService } from '../service/usuario.service';
import { PerfilService } from '../../perfil/service/perfil.service';
import { CorreiosService } from '../../correios/service/correios.service';


@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/usuario.template.html',
    providers: [UsuarioService, PerfilService, CorreiosService]
})

export class UsuarioComponent implements OnInit {
    usuarios: Usuario[];
    perfis: Perfil[];
    usuarioObject = new Usuario();


    edit = false;
    errorMessage: any;
    i: number;

    constructor(private usuarioService: UsuarioService,
        private perfilService: PerfilService,
        private correiosService: CorreiosService) {
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
    
    popularLogadouro(response){
        this.usuarioObject.endereco = 
        " " + response.logradouro + 
        " " + response.bairro ; 
    }        
    
    deletar(id, index): void {
        this.i = index;
        this.usuarioService.deletarUsuario(id)
            .subscribe(
            success => this.usuarios.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvar(usuario): void {
        if (!usuario.nome) { return; }
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(usuario: Usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
        this.usuarioObject.perfil = this.perfis[0];
    }
    editar(usuario: Usuario, persistir = false): void {

        this.edit = true;

        for (var p in this.perfis) {
            if (usuario.perfil.nome === this.perfis[p].nome) {
                usuario.perfil = this.perfis[p];
            }
        }

        this.usuarioObject = usuario;

        if (persistir) {
            if (!usuario.nome) { return; }
            this.usuarioService.salvarUsuario(usuario)
                .subscribe(
                usuario => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );

        }

    }
    atualizarFormulario(): void {
        this.usuarioObject = new Usuario();
        this.edit = false;
        this.usuarioObject.perfil = this.perfis[0];
    }


    listar(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);

    }
    popularPerfis(perfis): void {
        this.perfis = perfis;
        this.usuarioObject.perfil = this.perfis[0];
    }

    listarPerfil(): void {
        this.perfilService.getList()
            .subscribe(
            response => this.popularPerfis(response),
            error => this.errorMessage = <any>error);

    }


    ngOnInit(): void {
        this.listar();
        this.listarPerfil();
    }



}