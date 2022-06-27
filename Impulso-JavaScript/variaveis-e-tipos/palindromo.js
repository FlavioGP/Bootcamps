function palindromo(string) {
    if (!string) return console.log('Insira uma palavra/frase');
    string = string.toLowerCase();
    string = string.replaceAll(' ', '');


    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {

            return console.log(`${string} não é um palindromo`);
        }

    }

    return console.log(`${string} é um palindromo`);
}


function palindromo2(string) {
    if (!string) return console.log('Insira uma palavra/frase');
    string = string.toLowerCase();
    string = string.replaceAll(' ', '');

    return string.split('').reverse().join('') === string ?
        console.log(`${string} é um palindromo`) :
        console.log(`${string} não é um palindromo`);
}



palindromo('Acuda cadela da Leda caduca');
palindromo2('A dama admirou o rim da amada');

// A base do teto desaba
// A cara rajada da jararaca
// Acuda cadela da Leda caduca
// A dama admirou o rim da amada
