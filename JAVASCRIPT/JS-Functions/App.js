//**Iteración #1: Buscar el máximo**

//Completa la función que tomando dos números como argumento devuelva el más alto.
//function sum(numberOne , numberTwo)
const suma = (numberOne, numberTwo) => {
    if (numberOne < numberTwo) {
        return numberTwo;
    }
    else {
        return numberOne;

    }
};

let resultado = suma(3, 7);
console.log(resultado);


/**Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el 
más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (list) => {
    let superheroe = "";
    list.forEach((Element) => {
        superheroe = Element.length > superheroe.length ? Element : superheroe
    });
    return superheroe
};

console.log(findLongestWord(avengers));



//**Iteración #3: Calcular la suma**

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:*/
// Iteracion 3
/*const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let accumulator = 0;
    for (let i = 0; i < numbers.length; i++) {
        accumulator += numbers[i];
    }
    return accumulator;
}
let total = sumAll(numbers);
console.log(total);
//Otra forma de hacerlo*/

const numbers1 = [1, 2, 3, 5, 45, 37, 58];
let sumAll = (list) => {
    let total = 0;
    for (element of list) {
        total += element;

    }
    return total;

};
console.log(sumAll(numbers1));



//**Iteración #4: Calcular el promedio**

/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
    let total = 0;
    for (element of list) {
        total += element;
    }
    return total / list.length;
};
console.log(average(numbers2));

//otra forma de hacerlo
const numbers3 = [12, 21, 38, 5, 45, 37, 6];
function average(numbers3) {
    let accumulator1 = 0;
    for (let i = 0; i < numbers3.length; i++) {
        accumulator1 += numbers3[i] / numbers3.length;
    }
    return accumulator1;
}
let total1 = average(numbers3);
console.log(total1);
