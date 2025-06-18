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

separador();

type DiasDaSemana = "Dom" | "Seg" | "Ter" | "Qua";

const diaAtual: DiasDaSemana = "Qua";
console.log(diaAtual);

separador();

/* Interseção de Tipos */
type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programador: Pessoa & Funcionario = {
  nome: "Maycon",
  idade: 18,
  salario: 5000,
};

console.log(programador);

type Colaborador = Pessoa & Funcionario;
const outroProgramador: Colaborador = {
  nome: "Carla",
  idade: 18,
  salario: 4500,
};
console.log(outroProgramador);
