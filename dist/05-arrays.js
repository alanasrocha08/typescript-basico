"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
//Arrays com tipo único
// Sintaxe 1
const bandas = ["Calcinha Preta", "Desejo de menina", "Falamansa"];
// bandas.push(10); // erro, por estar pedindo uma string e está entregando um number
bandas.push("banda Djavú");
console.log(bandas);
// Sintaxe 2
const artistas = ["Marisa Monte", "Djavan", "Tim Maia"];
artistas.push("Cazusa");
console.log(artistas);
(0, modulos_1.separador)();
// Arrays com tipos mistos ou cmbinados
const pessoas = ["Alana", 17, "Clara", 17];
console.log(pessoas);
(0, modulos_1.separador)();
// Matriz tipada
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
