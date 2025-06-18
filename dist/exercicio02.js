"use strict";
/* 2) Cria uma função que receba um objeto baseado na interface Produto e que mostre, preço e garantia. Obs: o objeto deve ser desestruturado como parâmetros individais. */
function mostrarProduto({ nome, preco, garantia }) {
    console.log(`Produto:${nome}`);
    console.log(`Preço:${preco}`);
    console.log(`Garantia:${garantia}`);
}
/* 3) Use a função pelo menos 2x passando produtos diferentes. */
const produto1 = {
    nome: "Garrafa",
    preco: 30.59,
    garantia: "6 meses",
};
const produto2 = {
    nome: "Fone sem fio",
    preco: 60.99,
    garantia: "1 ano",
};
console.log(produto1);
console.log(produto2);
