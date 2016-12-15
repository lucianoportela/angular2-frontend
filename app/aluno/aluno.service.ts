import { Injectable } from '@angular/core';
import { Aluno } from './aluno';


import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlunoService {


    private url = 'https://node-angular2-restful.herokuapp.com/aluno';

    constructor(private http: Http) { }

    fetchAll(): Observable<Aluno[]> {

        return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    get(id: string): Observable<Aluno> {
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

    public salvar(aluno: Aluno): Observable<Aluno> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!aluno._id) {
            return this.http.post(this.url, aluno, options)
                .map(res => res.json())
                .do(data => console.log('Novo aluno:', data))  // debug
                .catch(this.handleError);
        } else {
            return this.http.put(this.url + "/" + aluno._id, aluno, options)
                .map(res => res.json())
                .do(data => console.log('Altera aluno:', data))  // debug
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

