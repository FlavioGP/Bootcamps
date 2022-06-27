function paresReplace(array){
    if(!array  || array.length < 1) return '-1';

    array.forEach(val =>{
        if (array[val] % 2 == 0) array[val] = 0;
    });

    return array;
}


const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const empty = [];
console.log(paresReplace(array));
console.log('----------');
console.log(paresReplace(empty));