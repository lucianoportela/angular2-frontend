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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Adicionar essa linha
var app_component_1 = require("./app.component");
var home_component_1 = require("../home/components/home.component");
var totalizador_component_1 = require("../totalizador/components/totalizador.component");
var totalizador_component_form_1 = require("../totalizador/components/totalizador.component.form");
var usuario_component_1 = require("../usuario/components/usuario.component");
var usuario_component_form_1 = require("../usuario/components/usuario.component.form");
var perfil_component_1 = require("../perfil/components/perfil.component");
var perfil_componente_form_1 = require("../perfil/components/perfil.componente.form");
var aluno_component_1 = require("../aluno/aluno.component");
var aluno_component_form_1 = require("../aluno/aluno.component.form");
var turma_component_1 = require("../turma/components/turma.component");
var routes_1 = require("../routes/routes");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            routes_1.routing
        ],
        //Adicionar essa linha
        declarations: [app_component_1.AppComponent,
            totalizador_component_1.TotalizadorComponent,
            totalizador_component_form_1.TotalizadorComponentForm,
            usuario_component_1.UsuarioComponent,
            usuario_component_form_1.UsuarioComponentForm,
            home_component_1.HomeComponent,
            perfil_component_1.PerfilComponent,
            perfil_componente_form_1.PerfilComponentForm,
            aluno_component_1.AlunoComponent,
            aluno_component_form_1.AlunoComponentForm,
            turma_component_1.TurmaComponent
        ],
        //Adicionar essa linha
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map