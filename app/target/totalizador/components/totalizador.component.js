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
var totalizador_1 = require("../class/totalizador");
var totalizador_service_1 = require("../service/totalizador.service");
var TotalizadorComponent = (function () {
    function TotalizadorComponent(totalizadorService) {
        this.totalizadorService = totalizadorService;
        this.totalizadorObject = new totalizador_1.Totalizador();
        this.edit = false;
    }
    TotalizadorComponent.prototype.deletar = function (id, index) {
        var _this = this;
        this.i = index;
        this.totalizadorService.deletar(id)
            .subscribe(function (success) { return _this.totalizadores.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    TotalizadorComponent.prototype.salvar = function (totalizador) {
        var _this = this;
        if (!totalizador.descricao) {
            return;
        }
        this.totalizadorService.salvar(totalizador)
            .subscribe(function (totalizador) { return _this.popularLista(totalizador); }, function (error) { return _this.errorMessage = error; });
    };
    TotalizadorComponent.prototype.popularLista = function (totalizador) {
        this.totalizadores.push(totalizador);
        this.totalizadorObject = new totalizador_1.Totalizador();
    };
    TotalizadorComponent.prototype.editar = function (totalizador, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.totalizadorObject = totalizador;
        if (persistir) {
            if (!totalizador.descricao) {
                return;
            }
            this.totalizadorService.salvar(totalizador)
                .subscribe(function (totalizador) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    TotalizadorComponent.prototype.atualizarFormulario = function () {
        this.totalizadorObject = new totalizador_1.Totalizador();
        this.edit = false;
    };
    TotalizadorComponent.prototype.listar = function () {
        var _this = this;
        this.totalizadorService.getList()
            .subscribe(function (totalizadores) { return _this.totalizadores = totalizadores; }, function (error) { return _this.errorMessage = error; });
    };
    TotalizadorComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return TotalizadorComponent;
}());
TotalizadorComponent = __decorate([
    core_1.Component({
        selector: 'totalizador',
        templateUrl: 'app/totalizador/templates/totalizador.template.html',
        providers: [totalizador_service_1.TotalizadorService]
    }),
    __metadata("design:paramtypes", [totalizador_service_1.TotalizadorService])
], TotalizadorComponent);
exports.TotalizadorComponent = TotalizadorComponent;
//# sourceMappingURL=totalizador.component.js.map