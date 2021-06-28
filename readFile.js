//Lendo arquivos no node:


/*forma síncrona:
    const fs = require('fs');

    const buffer = fs.readFileSync('./texto.txt');

    console.log(buffer.toString());
*/

//forma assíncrona:
const fs = require('fs');

                              //arrow function
fs.readFile('./texto002.txt', (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
});
