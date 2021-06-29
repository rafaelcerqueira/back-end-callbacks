//É um método de arrays que encontra um determinado elemento num array, retornando o índice desse elemento.

const array = ["Olá", "Hello", "maçã", "sábado", "Hello World", "abacate", 23, "dez", 5];

const encontrado = array.findIndex(x => x.length > 10);

console.log(`O índice do elemento que tem mais de dez caracteres é o ${encontrado}`);