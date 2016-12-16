import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from '../usuario/components/usuario.component';
import { UsuarioComponentForm } from '../usuario/components/usuario.component.form';

import { PerfilComponent } from '../perfil/components/perfil.component';
import { PerfilComponentForm } from '../perfil/components/perfil.componente.form';

import { HomeComponent } from '../home/components/home.component';
import { TotalizadorComponent } from '../totalizador/components/totalizador.component';
import { TotalizadorComponentForm } from '../totalizador/components/totalizador.component.form';



import { AlunoComponent } from '../aluno/aluno.component';
import { AlunoComponentForm } from '../aluno/aluno.component.form';

import { TurmaComponent } from '../turma/components/turma.component';
import { TurmaComponentForm } from '../turma/components/turma.component.form';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-add', component: UsuarioComponentForm },
    { path: 'usuario-edit/:id', component: UsuarioComponentForm },

    { path: 'home', component: HomeComponent },

    { path: 'perfil', component: PerfilComponent },
    { path: 'perfil-add', component: PerfilComponentForm },
    { path: 'perfil-edit/:id', component: PerfilComponentForm },




    { path: 'totalizador', component: TotalizadorComponent },
    { path: 'totalizador-add', component: TotalizadorComponentForm },
    { path: 'totalizador-edit/:id', component: TotalizadorComponentForm },

    { path: 'aluno', component: AlunoComponent },
    { path: 'aluno-add', component: AlunoComponentForm },
    { path: 'aluno-edit/:id', component: AlunoComponentForm },

    
    { path: 'turma', component: TurmaComponent },
    { path: 'turma-add', component: TurmaComponentForm },
    { path: 'turma-edit/:id', component: TurmaComponentForm },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);