import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';


@Component({
    selector: 'aluno',
    templateUrl: 'app/aluno/aluno.template.html',
    providers: [AlunoService]
})
export class AlunoComponent implements OnInit {
    alunoObject = new Aluno();
    alunos: Aluno[];
    edit = false;
    
    constructor(private alunoService: AlunoService){
        
    }
    
     deletar(index): void {
        this.alunos.splice(index, 1);
    }

    salvar(aluno): void {
       this.alunos.push(aluno);
       this.alunoObject = new Aluno();
    }

    editar(aluno, persistir = false) : void{
      this.edit = true;
      this.alunoObject = aluno;
      if(persistir){
         this.alunoObject = new Aluno();
         this.edit = false;
      }
    }
    
    
    
    listar(): void {
        this.alunoService.getListAluno().then(alunos=>this.alunos= alunos);
    }
    
    ngOnInit(): void {
        this.listar();
    }
    
    
    
    
    
    
}
