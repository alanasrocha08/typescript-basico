import { separador } from "./modulos";

export {};

/*Tuplas
São um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elemnetos de tipos diferentes. Obs: se usar readonly, a tupla não poderá ser modificada (somente leitura). */

const usuario: /* readonly */ [string, number, boolean] = ["Julia", 18, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "Ativo" : "Inativo");

usuario[1] = 30; // atualizando um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");

separador();

// Criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
// const produtoB:Produto = [100, "Calça"]; //erro, pois está fora do padrão da tupla
const produtoC: Produto = ["TV", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

// Usando tupla no retorno de função
// 1) Extraia a tupla do retorno da função para um novo type
type Operacao = [number, string];
function verificarOperacao(sucesso: boolean): Operacao {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperado no servidor"];
}

// 2) Desestruture o resultadoDaOperacao e mostre somente a mensagem no console
const [, mensagem] = verificarOperacao(true);
console.log(mensagem);
