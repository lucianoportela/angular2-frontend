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
var AlunoService = (function () {
    function AlunoService(http) {
        this.http = http;
        this.url = 'https://node-angular2-restful.herokuapp.com/aluno';
    }
    AlunoService.prototype.fetchAll = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AlunoService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AlunoService.prototype.deletar = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.url + "/" + id, options)
            .do(function (data) { return console.log('deletar:', data); }); // debug;
    };
    AlunoService.prototype.salvar = function (aluno) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!aluno._id) {
            return this.http.post(this.url, aluno, options)
                .map(function (res) { return res.json(); })
                .do(function (data) { return console.log('Novo aluno:', data); }) // debug
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.url + "/" + aluno._id, aluno, options)
                .map(function (res) { return res.json(); })
                .do(function (data) { return console.log('Altera aluno:', data); }) // debug
                .catch(this.handleError);
        }
    };
    AlunoService.prototype.handleError = function (error) {
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
    return AlunoService;
}());
AlunoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlunoService);
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno.service.js.map