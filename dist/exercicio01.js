"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirCor(nome, cor) {
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
