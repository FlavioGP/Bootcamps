function Pessoa(nome, idade){
    return {
        nome,
        idade
    }
}

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}


const anos = 10;
const pessoa = new Pessoa('Flavio', 20);

console.log('-----call----');
console.log(calculaIdade.call(pessoa, anos));
console.log('-----apply----');
console.log(calculaIdade.apply(pessoa, [anos]));