import { Injectable } from '@angular/core';
import { Turma } from '../class/turma';


import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TurmaService {


    private url = 'https://node-angular2-restful.herokuapp.com/turma';

    constructor(private http: Http) { }

    getList(): Observable<Turma[]> {
        return this.http.get(this.url)
            .map(res => res.json())
            .do(data => console.log('getList:', data))  // debug
            .catch(this.handleError);
    }

    deletar(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url + "/" + id, options)
         .do(data => console.log('deletar:', data));  // debug;
    }

    public salvar(turma: Turma): Observable<Turma> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!turma._id) {
            return this.http.post(this.url, turma, options)
                .map(res => res.json())
                .do(data => console.log('Novo turma:', data))  // debug
                .catch(this.handleError);
        } else {
            return this.http.put(this.url + "/" + turma._id, turma, options)
                .map(res => res.json())
                .do(data => console.log('Altera turma:', data))  // debug
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
