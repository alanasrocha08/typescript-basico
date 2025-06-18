export {};

/*Tuplas
São um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elemnetos de tipos diferentes. Obs: se usar readonly, a tupla não poderá ser modificada (somente leitura). */

const usuario: /* readonly */ [string, number, boolean] = ["Julia", 18, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "Ativo" : "Inativo");

usuario[1] = 30; // atualizando um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");
