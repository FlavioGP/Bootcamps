// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

class Pessoa{
    nome: string;
    idade: number;
    profissao: string;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

const pessoa1 = new Pessoa('Rafael', 18, 'padeiro');
const pessoa2 = new Pessoa('Alice', 25, 'Social Media');
const pessoa3 = new Pessoa('Thiago', 58, 'Gerente');
const pessoa4 = new Pessoa('Atonieta', 15, 'estudante');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

// Usando interface

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

const pessoa5: Pessoa = {
    nome: 'Rafael',
    idade: 18,
    profissao: 'supervisor',
}
const pessoa6: Pessoa = {
    nome: 'Aline',
    idade: 18,
    profissao: 'administradora de dados',
}
const pessoa7: Pessoa = {
    nome: 'Flavio',
    idade: 26,
    profissao: 'Desenvolvedor Web',
}

console.log(pessoa5);
console.log(pessoa6);
console.log(pessoa7);
