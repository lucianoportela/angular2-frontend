import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { UsuarioComponentForm } from '../usuario/components/usuario.component.form';
import { PerfilComponent } from '../perfil/components/perfil.component';
import { HomeComponent } from '../home/components/home.component';
import { TotalizadorComponent } from '../totalizador/components/totalizador.component';
import { AlunoComponent } from '../aluno/aluno.component';
import { TurmaComponent } from '../turma/components/turma.component';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-add', component: UsuarioComponentForm },
    { path: 'usuario-edit/:id', component: UsuarioComponentForm },
        
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'totalizador', component: TotalizadorComponent },
    { path: 'aluno', component: AlunoComponent },
    { path: 'turma', component: TurmaComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);