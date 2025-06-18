/* 1) Crie uma inteface para representar um produto com as propriedades nome, preço e garantia. */
interface Produto {
  nome: string;
  preco: number;
  garantia: string;
}

/* 2) Cria uma função que receba um objeto baseado na interface Produto e que mostre, preço e garantia. Obs: o objeto deve ser desestruturado como parâmetros individais. */
function mostrarProduto({ nome, preco, garantia }: Produto) {
  console.log(`Produto:${nome}`);
  console.log(`Preço:${preco}`);
  console.log(`Garantia:${garantia}`);
}

/* 3) Use a função pelo menos 2x passando produtos diferentes. */
const produto1: Produto = {
  nome: "Garrafa",
  preco: 30.59,
  garantia: "6 meses",
};

const produto2: Produto = {
  nome: "Fone sem fio",
  preco: 60.99,
  garantia: "1 ano",
};

mostrarProduto(produto1);
mostrarProduto(produto2);
