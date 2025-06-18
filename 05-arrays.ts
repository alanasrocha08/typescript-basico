import { separador } from "./modulos";

export {};

//Arrays com tipo único
// Sintaxe 1
const bandas = ["Calcinha Preta", "Desejo de menina", "Falamansa"];
// bandas.push(10); // erro, por estar pedindo uma string e está entregando um number
bandas.push("banda Djavú");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Marisa Monte", "Djavan", "Tim Maia"];
artistas.push("Cazusa");
console.log(artistas);

separador();

// Arrays com tipos mistos ou cmbinados
const pessoas: (string | number)[] = ["Alana", 17, "Clara", 17];
console.log(pessoas);

separador();

// Matriz tipada
const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
