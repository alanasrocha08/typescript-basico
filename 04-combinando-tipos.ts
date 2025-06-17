import { separador } from "./modulos";

export {};

/* Union Types */

// União de Tipo literal
let direcao: "esquerda" | "direita";
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

// Criando um tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2022;
let exemploB: NumeroOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

type Status = "Ativo" | "Inativo" | "Pendente";
let situacaoAluno1: Status = "Ativo";
let situacaoAluno2: Status = "Inativo";
let situacaoAluno3: Status = "Pendente";

console.log("Situação 1:" + situacaoAluno1);
console.log("Situação 2:" + situacaoAluno2);
console.log("Situação 3:" + situacaoAluno3);
