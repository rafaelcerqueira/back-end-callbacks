/*setInterval(() => {
    console.log(`Passou 1 segundo.`);
}, 1000);
*/

//Exemplo com setInterval - contagem regressiva:
let contagem = 10;

function imprimirContagem () {

    if (contagem === 0) {
        console.log('Lift Off!');

        //clearInterval para parar o programa.
        clearInterval(intervalId);
    } else {
        console.log(`O foguete será lançado em ${contagem} segundo${contagem === 1 ? "" : "s"}.`);
        contagem--;
    }
}

imprimirContagem();

const intervalId = setInterval(imprimirContagem, 1000);

