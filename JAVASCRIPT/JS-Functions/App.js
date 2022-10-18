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





