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
var aluno_1 = require("./aluno");
var aluno_service_1 = require("./aluno.service");
var AlunoComponent = (function () {
    function AlunoComponent(alunoService) {
        this.alunoService = alunoService;
        this.alunoObject = new aluno_1.Aluno();
        this.edit = false;
    }
    AlunoComponent.prototype.listar = function () {
        var _this = this;
        this.alunoService.fetchAll()
            .subscribe(function (alunos) { return _this.alunos = alunos; }, function (error) { return _this.errorMessage = error; });
    };
    AlunoComponent.prototype.deletar = function (id, index) {
        var _this = this;
        this.i = index;
        this.alunoService.deletar(id)
            .subscribe(function (success) { return _this.alunos.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    AlunoComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return AlunoComponent;
}());
AlunoComponent = __decorate([
    core_1.Component({
        selector: 'aluno',
        templateUrl: 'app/aluno/aluno.template.html',
        providers: [aluno_service_1.AlunoService]
    }),
    __metadata("design:paramtypes", [aluno_service_1.AlunoService])
], AlunoComponent);
exports.AlunoComponent = AlunoComponent;
//# sourceMappingURL=aluno.component.js.map