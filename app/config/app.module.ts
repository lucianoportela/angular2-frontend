import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Adicionar essa linha
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/components/home.component';  

import { TotalizadorComponent } from '../totalizador/components/totalizador.component';
import { TotalizadorComponentForm } from '../totalizador/components/totalizador.component.form';


import { UsuarioComponent } from '../usuario/components/usuario.component';
import { UsuarioComponentForm } from '../usuario/components/usuario.component.form';

import { PerfilComponent } from '../perfil/components/perfil.component';
import { PerfilComponentForm } from '../perfil/components/perfil.componente.form';

import { AlunoComponent } from '../aluno/aluno.component';
import { AlunoComponentForm } from '../aluno/aluno.component.form';

import { TurmaComponent } from '../turma/components/turma.component';


import { routing } from '../routes/routes';

import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, 
    FormsModule, 
    HttpModule,
    routing
    ],
    //Adicionar essa linha
    declarations: [AppComponent,
        TotalizadorComponent,
        TotalizadorComponentForm,
        UsuarioComponent,
        UsuarioComponentForm,
        HomeComponent,
        PerfilComponent,
        PerfilComponentForm,
        AlunoComponent,
        AlunoComponentForm,
        TurmaComponent
        ],
        
    //Adicionar essa linha
    bootstrap: [AppComponent]
})
export class AppModule { }