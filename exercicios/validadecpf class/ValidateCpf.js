/*
705.484.450-52

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
SE O NUMERO DO DIGITO FOR MAIOR QUE 9, CONSIDERAMOS 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo digito)
SE O NUMERO DO DIGITO FOR MAIOR QUE 9, CONSIDERAMOS 0

*/
class ValidateCpf {
    constructor(cpf){
        this.cpfClean = cpf.replace(/\D+/g, '');
    }

    validate(){
        if(this.cpfClean == undefined) return false;
        // if(this.cpfClean.length !== 11) return false;
        const cpfWithoutDigit = this.cpfClean.slice(0, -2);
        const digitOne = ValidateCpf.createDigits(cpfWithoutDigit);
        const digitTwo = ValidateCpf.createDigits(cpfWithoutDigit + digitOne);
        const newCpf = cpfWithoutDigit + digitOne + digitTwo;
        return this.cpfClean === newCpf;
    }

    static createDigits(cpfWithoutDigit){
        const cpfArray = Array.from(cpfWithoutDigit);
        let length = cpfArray.length + 1;
        const amount = cpfArray.reduce((ac, val) => {
            ac += length * Number(val);
            length--;
            return ac;
        }, 0);

        const digit = 11 - (amount % 11);
        return digit > 9 ? '0' : String(digit);
    }

    
}


const cpf = '168.094.125-12';

const validateCpf = new ValidateCpf(cpf);

if(validateCpf.validate()){
    console.log("Cpf Valido!");
}else{
    console.log("Cpf Invalido!");
}
