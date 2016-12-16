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
var router_1 = require("@angular/router");
var TurmaComponentForm = (function () {
    function TurmaComponentForm(turmaService, router, routeActivated) {
        this.turmaService = turmaService;
        this.router = router;
        this.routeActivated = routeActivated;
        this.turmaObject = new turma_1.Turma();
        this.edit = false;
    }
    TurmaComponentForm.prototype.salvar = function (turma) {
        var _this = this;
        if (!turma.descricao) {
            return;
        }
        this.turmaService.salvar(turma)
            .subscribe(function (turma) { return _this.router.navigate(['turma']); }, function (error) { return _this.errorMessage = error; });
    };
    TurmaComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.turmaObject = new turma_1.Turma();
            if (id) {
                console.log(id);
                _this.turmaService.get(id)
                    .subscribe(function (turma) { return _this.turmaObject = turma; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return TurmaComponentForm;
}());
TurmaComponentForm = __decorate([
    core_1.Component({
        selector: 'turma',
        templateUrl: 'app/turma/templates/turma.template.form.html',
        providers: [turma_service_1.TurmaService]
    }),
    __metadata("design:paramtypes", [turma_service_1.TurmaService,
        router_1.Router,
        router_1.ActivatedRoute])
], TurmaComponentForm);
exports.TurmaComponentForm = TurmaComponentForm;
//# sourceMappingURL=turma.component.form.js.map