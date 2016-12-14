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
    
    deletar(index): void {
        this.perfis.splice(index, 1);
    }

    salvar(perfil): void {
       this.perfis.push(perfil);
       this.perfilObject = new Perfil();
    }

    editar(perfil, persistir = false) : void{
      this.edit = true;
      this.perfilObject = perfil;
      if(persistir){
         this.perfilObject = new Perfil();
         this.edit = false;
      }
    }    

    listar(): void {
        this.perfilService.getList()
            .subscribe(
            perfis => this.perfis = perfis,
            error => this.errorMessage = <any>error);
    }
    
    ngOnInit(): void{
        this.listar();
    } 
}
