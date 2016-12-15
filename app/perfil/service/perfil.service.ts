import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';


import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PerfilService {


    private url = 'https://node-angular2-restful.herokuapp.com/perfil';

    constructor(private http: Http) { }

    
   fetchAll(): Observable<Perfil[]> {
        return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    get(id: string): Observable<Perfil> {
        return this.http.get(this.url + "/" + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletar(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url + "/" + id, options)
         .do(data => console.log('deletar:', data));  // debug;
    }

    public salvar(perfil: Perfil): Observable<Perfil> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if (!perfil._id) {
            return this.http.post(this.url, perfil, options)
                .map(res => res.json())
                .do(data => console.log('Novo perfil:', data))  // debug
                .catch(this.handleError);
        } else {
            return this.http.put(this.url + "/" + perfil._id, perfil, options)
                .map(res => res.json())
                .do(data => console.log('Altera perfil:', data))  // debug
                .catch(this.handleError);
        }

    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

   



}
