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
var totalizador_1 = require("../class/totalizador");
var totalizador_service_1 = require("../service/totalizador.service");
var TotalizadorComponentForm = (function () {
    function TotalizadorComponentForm(totalizadorService, router, routeActivated) {
        this.totalizadorService = totalizadorService;
        this.router = router;
        this.routeActivated = routeActivated;
        this.totalizadorObject = new totalizador_1.Totalizador();
        this.edit = false;
    }
    TotalizadorComponentForm.prototype.salvar = function (totalizador) {
        var _this = this;
        if (!totalizador.descricao) {
            return;
        }
        this.totalizadorService.salvar(totalizador)
            .subscribe(function (totalizador) { return _this.router.navigate(['totalizador']); }, function (error) { return _this.errorMessage = error; });
    };
    TotalizadorComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.totalizadorObject = new totalizador_1.Totalizador();
            if (id) {
                console.log(id);
                _this.totalizadorService.get(id)
                    .subscribe(function (totalizador) { return _this.totalizadorObject = totalizador; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return TotalizadorComponentForm;
}());
TotalizadorComponentForm = __decorate([
    core_1.Component({
        selector: 'totalizador',
        templateUrl: 'app/totalizador/templates/totalizador.template.form.html',
        providers: [totalizador_service_1.TotalizadorService]
    }),
    __metadata("design:paramtypes", [totalizador_service_1.TotalizadorService,
        router_1.Router,
        router_1.ActivatedRoute])
], TotalizadorComponentForm);
exports.TotalizadorComponentForm = TotalizadorComponentForm;
//# sourceMappingURL=totalizador.component.form.js.map