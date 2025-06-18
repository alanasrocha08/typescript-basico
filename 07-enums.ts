export {};

/* Enums são uma maneira de definir um conjunto de constantes nomeados. Úteis para definir: status, categorias, grupos de calores relacionados etc. */

enum DiasDaSemana {
  Domigo = "Dom",
  Segunda = "Seg",
  Terça = "Ter",
  Quarta = "Qua",
}

const diaAtual: DiasDaSemana = DiasDaSemana.Quarta;
console.log(diaAtual);
