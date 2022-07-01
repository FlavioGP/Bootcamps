class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
       this._saldo = valor;
    }

    sacar(valor){
        if(!valor) return;
        if(valor > this._saldo){
            return 'Saldo insuficiente';
        }
        this._saldo -= valor;
        return `Você retirou ${valor} seu saldo agora é de ${this._saldo - valor}!`
    }

    depositar(valor){
        if(!valor) return;
        this._saldo += valor; 
        return `Você depositou ${valor} seu saldo agora é de ${this._saldo + valor}!`;   
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(bool){
        return this._cartaoCredito = bool;
    }
}


class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta poupança';

    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta universitaria';

    }

    sacar(valor){
        if(!valor) return;
        if (valor > 500) return 'Você so pode sacar 500 reais';
        this._saldo -= valor; 
        return `Você retirou ${valor} seu saldo agora é de ${this._saldo - valor}!`;
         
    }
}
