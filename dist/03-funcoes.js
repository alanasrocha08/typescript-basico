"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("Alana"));
// console.log(saudacao(10)); //erro, é passado number
// console.log(saudacao(true)); // erro, é passado boolean
(0, modulos_1.separador)();
/*Uso de parâmetro opcional com flag ? após o nome do parâmetro */
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você começou a estudar em ${anoLetivo} e está estudando ${curso}.`;
    }
    return `Olá ${nome}, você não está fazendo nenhum curso.`;
}
console.log(saudacaoCompleta("Alana", 2023, "Gatronomia"));
console.log(saudacaoCompleta("Alana"));
