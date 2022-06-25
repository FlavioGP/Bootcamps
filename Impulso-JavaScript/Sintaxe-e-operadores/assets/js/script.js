class Calculator {
    constructor() {
        this.form = document.querySelector('.form');
    }

    event() {
        this.form.addEventListener('submit', e => {
            const numberOne = document.getElementById('number-one');
            const numberTwo = document.getElementById('number-two');
            e.preventDefault();
            this.clear();
            this.resultList(numberOne.value, numberTwo.value);
        });
    }

    resultList(num1, num2) {
        if (num1 == '' && num2 == '') return this.resultMessage('Os campos não podem estar vazios');
        this.soma(num1, num2);
        this.equals(num1, num2);
        this.checkValues();
    }

    soma(num1, num2){
        const soma = Number(num1) + Number(num2);
        const msg = document.querySelector('.soma');
        msg.style.opacity = 1;
        msg.innerText = soma;

    }


    equals(num1, num2) {
        if (Number(num1) == Number(num2)) {
            this.resultMessage(`Os numeros ${num1} e ${num2} são iguais`);
        } else {
            this.resultMessage(`Os numeros ${num1} e ${num2} não são iguais`);
        }
    }

    checkValues() {
        const soma = Number(document.querySelector('.soma').innerText);
        if (soma > 10 && soma < 20) return this.resultMessage(`Sua soma é ${soma} que é maior que 10 e menor que 20`);
        if (soma > 20) return this.resultMessage(`Sua soma é ${soma} que é maior que 10 e maior que 20`);
        if (soma < 10) return this.resultMessage(`Sua soma é ${soma} que é menor que 10 e menor que 20`);
        if (soma == 10 || soma == 20) return this.resultMessage(`Sua soma é ${soma} que é igual à ${soma}`);
    }

    resultMessage(text) {
        const result = document.querySelector('.result');
        const li = document.createElement('li');
        li.classList.add('msg');
        li.innerHTML = text;
        result.appendChild(li);
    }

    clear(){
        for (let msg of document.querySelectorAll('.msg')) {
            msg.remove();
        }

        document.querySelector('.soma').innerText = '';
    }
}



const calculator = new Calculator();
calculator.event();