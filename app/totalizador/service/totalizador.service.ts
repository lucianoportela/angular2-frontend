import { Injectable } from '@angular/core';
import { Totalizador } from '../class/totalizador';


import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TotalizadorService {


    private totalizadorUrl = 'https://node-angular2-restful.herokuapp.com/totalizador';

    constructor(private http: Http) { }

    fetchAll(): Observable<Totalizador[]> {

        return this.http.get(this.totalizadorUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    get(id: string): Observable<Totalizador> {
        return this.http.get(this.totalizadorUrl + "/" + id)
            .map(res => res.json())
            .catch(this.handleError);
    }


    deletar(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.totalizadorUrl + "/" + id, options)
            .do(data => console.log('deletar:', data));  // debug;
    }

    public salvar(totalizador: Totalizador): Observable<Totalizador> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!totalizador._id) {
            return this.http.post(this.totalizadorUrl, totalizador, options)
                .map(res => res.json())
                .do(data => console.log('Novo totalizador:', data))  // debug
                .catch(this.handleError);
        } else {
            return this.http.put(this.totalizadorUrl + "/" + totalizador._id, totalizador, options)
                .map(res => res.json())
                .do(data => console.log('Altera totalizador:', data))  // debug
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
