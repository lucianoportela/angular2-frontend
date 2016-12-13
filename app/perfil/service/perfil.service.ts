import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';



@Injectable()
export class PerfilService {
    perfis = [];
    getListPerfil(): Promise<Perfil[]> {
        this.perfis = [{ nome: 'Administrador' },
        { nome: 'Gerente' }
        ];
        return Promise.resolve(this.perfis);
    }




}

