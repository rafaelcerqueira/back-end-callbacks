//Funções armazenadas em variáveis

function imprimirNaTela(mensagem) {
    console.log(mensagem);
}

imprimirNaTela("Olá")

//Guardando a função em uma variável
//A função guardada em uma variável pode ser uma função anônima.
const imprimirNaTela = function (mensagem) {
    console.log(mensagem);
}

imprimirNaTela("Olá");
