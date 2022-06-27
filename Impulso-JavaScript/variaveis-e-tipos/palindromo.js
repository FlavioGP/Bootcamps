function palindromo(string) {
    if (!string) return console.log('Insira uma palavra/frase');

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            
            return console.log(`${string} não é um palindromo`);
        }

    }

    return console.log(`${string} é um palindromo`);
}


palindromo('ama');
