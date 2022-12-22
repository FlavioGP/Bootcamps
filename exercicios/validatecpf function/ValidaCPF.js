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

function ValidaCPF(cpf){
    this.cleanCpf = cpf.replace(/\D+/g, '');

}
ValidaCPF.prototype.valid = function(){
    if (this.cleanCpf == undefined) return false;
    if (this.cleanCpf.length !== 11) return false;
    const cpfwithoutDigit = this.cleanCpf.slice(0, -2);
    const digitOne = this.createDigit(cpfwithoutDigit);
    const digitTwo = this.createDigit(cpfwithoutDigit + digitOne);
    const cpfValid =  cpfwithoutDigit + String(digitOne) + String(digitTwo);
    return this.cleanCpf == cpfValid;
}

ValidaCPF.prototype.createDigit = function(cpfwithoutDigit){
    const cpfArray = Array.from(cpfwithoutDigit);
    let regressive = cpfArray.length + 1;
    const amount = cpfArray.reduce((ac, val) => {

        ac += (Number(val) * regressive);
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (amount % 11);
    
    return digit > 9 ? '0' : digit;

}


const cpf = '705.484.450-52';
const validaCpf = new ValidaCPF(cpf);

if(validaCpf.valid()){
    console.log('CPF VALIDO');
}else{
    console.log('CPF INVALIDO');
}