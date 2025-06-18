"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
/*Tuplas
São um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elemnetos de tipos diferentes. Obs: se usar readonly, a tupla não poderá ser modificada (somente leitura). */
const usuario = ["Julia", 18, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "Ativo" : "Inativo");
usuario[1] = 30; // atualizando um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");
(0, modulos_1.separador)();
const produtoA = ["Camiseta", 29.99];
// const produtoB:Produto = [100, "Calça"]; //erro, pois está fora do padrão da tupla
const produtoC = ["TV", 1000];
console.log(produtoA);
console.log(produtoC);
(0, modulos_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro inesperado no servidor"];
}
// 2) Desestruture o resultadoDaOperacao e mostre somente a mensagem no console
const [numero, mensagem] = verificarOperacao(true);
console.log(numero, mensagem);
