import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { UsuarioService } from '../service/usuario.service';


@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/usuario.template.html',
    providers: [UsuarioService]
})

export class UsuarioComponent implements OnInit {
    usuarios: Usuario[];
    usuarioObject = new Usuario();


    perfis = [
        { nome: "Admin" },
        { nome: "Gerente" }
    ];


    edit = false;
    errorMessage: any;
    i: number;

    constructor(private usuarioService: UsuarioService) {
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
            this.usuarioObject.perfil = this.perfis[0];
        }

    }
    atualizarFormulario(): void {
        this.usuarioObject = new Usuario();
        this.edit = false;
    }


    listar(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);

    }


    ngOnInit(): void {
        this.listar();
        this.usuarioObject.perfil = this.perfis[2];
    }



}