export {};

/*1) Crie uma função chamada "exibirCor" que aceite:
- nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional) */

/*Atenção: o parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores.*/
type cor = "amarelo" | "azul" | "branco" | "verde" | "vermelho";

function exibirCor(nome: string, cor?: cor): string {
  if (cor) {
    return `Olá ${nome}, sua cor favorita é ${cor}.`;
  }
  return `Olá ${nome}, você não tem cor favorita.`;
}

/*2) Chame a função pei menos 2x:
- Na primeira, passe o nome e uma cor (das possíveis)
- Na segunda, passe somente o nome*/
console.log(exibirCor("Alana", "amarelo"));
console.log(exibirCor("Alana"));
