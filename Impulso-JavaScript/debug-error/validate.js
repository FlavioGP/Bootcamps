
function validArray(array, length){
    try{
        if(!array || !length) throw new ReferenceError('Parametros não enviados ou invalidos');
        if(typeof length !== 'number') throw new TypeError('O segundo parametro precisa ser do tipo number');
        if(typeof array !== 'object') throw new TypeError('O primeiro parametro precisa ser do tipo object');
        if(array.length !== length) throw new RangeError('o tamanho do array e o numero enviado são diferentes');

        return array;
    }catch(e){ 
        if(e instanceof ReferenceError) console.log('Este é o ReferenceError: ', e.message);
        if(e instanceof TypeError) console.log('Este é o TypeError: ', e.message);
        if(e instanceof RangeError) console.log('Este é o RangeError: ', e.message);
    }
}



console.log(validArray([1,2,3], 3));