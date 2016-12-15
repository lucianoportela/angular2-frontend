"use strict";
var router_1 = require("@angular/router");
var usuario_component_1 = require("../usuario/components/usuario.component");
var usuario_component_form_1 = require("../usuario/components/usuario.component.form");
var perfil_component_1 = require("../perfil/components/perfil.component");
var perfil_componente_form_1 = require("../perfil/components/perfil.componente.form");
var home_component_1 = require("../home/components/home.component");
var totalizador_component_1 = require("../totalizador/components/totalizador.component");
var totalizador_component_form_1 = require("../totalizador/components/totalizador.component.form");
var aluno_component_1 = require("../aluno/aluno.component");
var aluno_component_form_1 = require("../aluno/aluno.component.form");
var turma_component_1 = require("../turma/components/turma.component");
//Configurações da rota
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent },
    { path: 'usuario-add', component: usuario_component_form_1.UsuarioComponentForm },
    { path: 'usuario-edit/:id', component: usuario_component_form_1.UsuarioComponentForm },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'perfil', component: perfil_component_1.PerfilComponent },
    { path: 'perfil-add', component: perfil_componente_form_1.PerfilComponentForm },
    { path: 'perfil-edit/:id', component: perfil_componente_form_1.PerfilComponentForm },
    { path: 'totalizador', component: totalizador_component_1.TotalizadorComponent },
    { path: 'totalizador-add', component: totalizador_component_form_1.TotalizadorComponentForm },
    { path: 'totalizador-edit/:id', component: totalizador_component_form_1.TotalizadorComponentForm },
    { path: 'aluno', component: aluno_component_1.AlunoComponent },
    { path: 'aluno-add', component: aluno_component_form_1.AlunoComponentForm },
    { path: 'aluno-edit/:id', component: aluno_component_form_1.AlunoComponentForm },
    { path: 'turma', component: turma_component_1.TurmaComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map