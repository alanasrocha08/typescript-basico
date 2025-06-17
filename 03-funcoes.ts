import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("Alana"));
// console.log(saudacao(10)); //erro, é passado number
// console.log(saudacao(true)); // erro, é passado boolean

separador();

/*Uso de parâmetro opcional com flag ? após o nome do parâmetro */
function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você começou a estudar em ${anoLetivo} e está estudando ${curso}.`;
  }
  return `Olá ${nome}, você não está fazendo nenhum curso.`;
}
console.log(saudacaoCompleta("Alana", 2023, "Gatronomia"));
console.log(saudacaoCompleta("Alana"));
