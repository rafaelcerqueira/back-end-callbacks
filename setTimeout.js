//Função setTimeout:


//utilizando o setTimeout com arrow function:
setTimeout(() => {
    //console.log('Programa pronto!')
}, 2000);

console.log('Iniciando o programa.');
console.log("Processando...");

//Existem várias formas de declarar a função setTimeout. Por exemplo:

const imprimirPrograma = () => {
    console.log('O programa está pronto!');
};

setTimeout(imprimirPrograma, 2000);