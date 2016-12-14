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
var turma_1 = require("../class/turma");
var turma_service_1 = require("../service/turma.service");
var TurmaComponent = (function () {
    function TurmaComponent(totalizadorService) {
        this.totalizadorService = totalizadorService;
        this.turmaObject = new turma_1.Turma();
        this.edit = false;
    }
    TurmaComponent.prototype.deletar = function (id, index) {
        var _this = this;
        this.i = index;
        this.totalizadorService.deletar(id)
            .subscribe(function (success) { return _this.turmas.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    TurmaComponent.prototype.salvar = function (totalizador) {
        var _this = this;
        if (!totalizador.descricao) {
            return;
        }
        this.totalizadorService.salvar(totalizador)
            .subscribe(function (totalizador) { return _this.popularLista(totalizador); }, function (error) { return _this.errorMessage = error; });
    };
    TurmaComponent.prototype.popularLista = function (totalizador) {
        this.turmas.push(totalizador);
        this.turmaObject = new turma_1.Turma();
    };
    TurmaComponent.prototype.editar = function (totalizador, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.turmaObject = totalizador;
        if (persistir) {
            if (!totalizador.descricao) {
                return;
            }
            this.totalizadorService.salvar(totalizador)
                .subscribe(function (totalizador) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    TurmaComponent.prototype.atualizarFormulario = function () {
        this.turmaObject = new turma_1.Turma();
        this.edit = false;
    };
    TurmaComponent.prototype.listar = function () {
        var _this = this;
        this.totalizadorService.getList()
            .subscribe(function (turmas) { return _this.turmas = turmas; }, function (error) { return _this.errorMessage = error; });
    };
    TurmaComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return TurmaComponent;
}());
TurmaComponent = __decorate([
    core_1.Component({
        selector: 'turma',
        templateUrl: 'app/turma/templates/turma.template.html',
        providers: [turma_service_1.TurmaService]
    }),
    __metadata("design:paramtypes", [turma_service_1.TurmaService])
], TurmaComponent);
exports.TurmaComponent = TurmaComponent;
//# sourceMappingURL=turma.component.js.map