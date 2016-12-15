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
var router_1 = require("@angular/router");
var aluno_1 = require("./aluno");
var aluno_service_1 = require("./aluno.service");
var AlunoComponentForm = (function () {
    function AlunoComponentForm(alunoService, router, routeActivated) {
        this.alunoService = alunoService;
        this.router = router;
        this.routeActivated = routeActivated;
        this.alunoObject = new aluno_1.Aluno();
        this.edit = false;
    }
    AlunoComponentForm.prototype.salvar = function (aluno) {
        var _this = this;
        console.log(aluno);
        if (!aluno.nome) {
            return;
        }
        this.alunoService.salvar(aluno)
            .subscribe(function (aluno) { return _this.router.navigate(['aluno']); }, function (error) { return _this.errorMessage = error; });
    };
    AlunoComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.alunoObject = new aluno_1.Aluno();
            if (id) {
                console.log(id);
                _this.alunoService.get(id)
                    .subscribe(function (aluno) { return _this.alunoObject = aluno; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return AlunoComponentForm;
}());
AlunoComponentForm = __decorate([
    core_1.Component({
        selector: 'aluno',
        templateUrl: 'app/aluno/aluno.template.form.html',
        providers: [aluno_service_1.AlunoService]
    }),
    __metadata("design:paramtypes", [aluno_service_1.AlunoService,
        router_1.Router,
        router_1.ActivatedRoute])
], AlunoComponentForm);
exports.AlunoComponentForm = AlunoComponentForm;
//# sourceMappingURL=aluno.component.form.js.map