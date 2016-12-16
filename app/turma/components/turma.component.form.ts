import { Component, OnInit  } from '@angular/core';
import { Turma } from '../class/turma';
import { TurmaService } from '../service/turma.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'turma',
    templateUrl: 'app/turma/templates/turma.template.form.html',
    providers: [TurmaService]
})

export class TurmaComponentForm implements OnInit  {
    turmas: Turma[];
    turmaObject = new Turma();
    edit = false;
    errorMessage: any;
    i:number;
    private sub: any;
    
    constructor(private turmaService: TurmaService,
        private router: Router,
        private routeActivated: ActivatedRoute) {
    }    
      salvar(turma): void {
        if (!turma.descricao) { return; }
        this.turmaService.salvar(turma)
            .subscribe(
            turma => this.router.navigate(['turma']),
            error => this.errorMessage = <any>error
            );
    }
  
 

       
    
    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.turmaObject = new Turma();
            if (id) {
                console.log(id);
                this.turmaService.get(id)
                    .subscribe(
                    turma => this.turmaObject = turma,
                    error => this.errorMessage = <any>error
                    );
            }

        });
    }
    
    
}
