/* Fazer um programa que percorra uma lista de objetos no formato:
{ 
    nome : "José",
    idade: 30,
    altura: 173
} e modificar para o formado:
{
    nome: "José",
    idade: "30 anos",
    altura: "1.73m",
    maioridade: "É maior de idade"
}
*/

const pessoas = [
    {
        nome : "José",
        idade: 30,
        altura: 173
    },
    {
        nome : "Pedro",
        idade: 12,
        altura: 144
    },
    {
        nome : "Maria",
        idade: 38,
        altura: 156
    }
];


//poderia omitir o return e as chaves da arrow function, desde que o objeto esteja dentro de parênteses.
const pessoasModificado = pessoas.map(x => {
    return {
        nome: x.nome,
        idade: `${x.idade} anos`,
        altura: `${x.altura/100}m`,
        maioridade: (x.idade >= 18 ? "É maior de idade" : "É menor de idadde")
    }
});

console.log(pessoasModificado);