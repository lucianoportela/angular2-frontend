"use strict";
var router_1 = require("@angular/router");
var usuario_component_1 = require("../usuario/components/usuario.component");
var perfil_component_1 = require("../perfil/components/perfil.component");
var home_component_1 = require("../home/components/home.component");
var totalizador_component_1 = require("../totalizador/components/totalizador.component");
var aluno_component_1 = require("../aluno/aluno.component");
var turma_component_1 = require("../turma/components/turma.component");
//Configurações da rota
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent },
    { path: 'usuario/:id', component: usuario_component_1.UsuarioComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'perfil', component: perfil_component_1.PerfilComponent },
    { path: 'totalizador', component: totalizador_component_1.TotalizadorComponent },
    { path: 'aluno', component: aluno_component_1.AlunoComponent },
    { path: 'turma', component: turma_component_1.TurmaComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map