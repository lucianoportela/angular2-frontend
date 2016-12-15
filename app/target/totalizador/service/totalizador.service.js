"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var TotalizadorService = (function () {
    function TotalizadorService(http) {
        this.http = http;
        this.totalizadorUrl = 'https://node-angular2-restful.herokuapp.com/totalizador';
    }
    TotalizadorService.prototype.fetchAll = function () {
        return this.http.get(this.totalizadorUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TotalizadorService.prototype.get = function (id) {
        return this.http.get(this.totalizadorUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TotalizadorService.prototype.deletar = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.totalizadorUrl + "/" + id, options)
            .do(function (data) { return console.log('deletar:', data); }); // debug;
    };
    TotalizadorService.prototype.salvar = function (totalizador) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!totalizador._id) {
            return this.http.post(this.totalizadorUrl, totalizador, options)
                .map(function (res) { return res.json(); })
                .do(function (data) { return console.log('Novo totalizador:', data); }) // debug
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.totalizadorUrl + "/" + totalizador._id, totalizador, options)
                .map(function (res) { return res.json(); })
                .do(function (data) { return console.log('Altera totalizador:', data); }) // debug
                .catch(this.handleError);
        }
    };
    TotalizadorService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return TotalizadorService;
}());
TotalizadorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TotalizadorService);
exports.TotalizadorService = TotalizadorService;
//# sourceMappingURL=totalizador.service.js.map