import { Component, OnInit } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilService } from '../service/perfil.service';


@Component({
    selector: 'perfil',
    templateUrl: 'app/perfil/templates/perfil.template.html',
    providers: [PerfilService]
})
export class PerfilComponent implements OnInit {

    
    perfilObject = new Perfil();
    perfis: Perfil[];
    edit = false;
    
    errorMessage: any;
    i: number;
    
    constructor(private perfilService: PerfilService) {
        
    }


    listar(): void {
        this.perfilService.fetchAll()
            .subscribe(
            perfis => this.perfis = perfis,
            error => this.errorMessage = <any>error);
    }
    
        
    deletar(id, index): void {
        this.i = index;
            this.perfilService.deletar(id)
            .subscribe(
            success => this.perfis.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }
    
    ngOnInit(): void{
        this.listar();
    } 
}
