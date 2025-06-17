"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulos_1 = require("./modulos");
// Exemplos de tipos básicos
var idade = 30;
var ativo = true;
var nome = "Alana";
console.log("".concat(nome, " tem ").concat(idade, " anos."));
// Nova atribuição
idade = 31;
console.log("".concat(nome, " agora tem ").concat(idade, " anos."));
console.log("Status: ".concat(ativo ? "Ativo" : "Inativo"));
(0, modulos_1.separador)();
/* Sobre o tipo any (qualquer)
Tipo neutro, usado SOMENTE em situações de exceção em que não é possível rapidamente identificar qual o tipo do valoe (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar para TS.)  */
var qualquerCoisa = "Pode ser qualquer coisa";
qualquerCoisa = 10; //number
qualquerCoisa = true; //agora boolean
console.log("Qualquer coisa: ".concat(qualquerCoisa));
