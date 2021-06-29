//É um método de arrays que encontra um determinado elemento num array, retornando-o.

//Dado um array com textos aleatórios, faça um programa que encontra o primeiro texto com mais de dez caracteres.

const array = ["Olá", "Hello", "maçã", "sábado", "Hello World", "abacate", 23, "dez", 5];

const encontrado = array.find(x => x.length > 10);

if (encontrado) {
    console.log(`A palavra com mais de dez caracteres é ${encontrado}`);
} else {
    console.log(`Nenhum item possui mais de dez caracteres.`)
}