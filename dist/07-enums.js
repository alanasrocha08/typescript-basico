"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Enums são uma maneira de definir um conjunto de constantes nomeados. Úteis para definir: status, categorias, grupos de calores relacionados etc. */
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Domigo"] = "Dom";
    DiasDaSemana["Segunda"] = "Seg";
    DiasDaSemana["Ter\u00E7a"] = "Ter";
    DiasDaSemana["Quarta"] = "Qua";
})(DiasDaSemana || (DiasDaSemana = {}));
const diaAtual = DiasDaSemana.Quarta;
console.log(diaAtual);
