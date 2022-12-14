/*Iteración #1: Variables
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.*/
let myFavoriteHero = "Hulk"
console.log(myFavoriteHero);

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50
console.log(x);

//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
let h = 5
let y = 10

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = 'h + y'
console.log(z);



//Iteración #2: Variables avanzadas

/*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25. y el nombre a otro.*/
const character = { name: 'Jack Sparrow', age: 10 };
console.log(character);
character.age = 25;
character.name = 'Lissy'
console.log(character);

/*1.2 Declara 3 variables con los nombres y valores siguientes 
firstName = 'Jon';
lastName = 'Snow';
age = 24;*/
//Muestralos por consola de esta forma: 
'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log("soy" + " " + firstName + " " + lastName + "," + " " + "tengo" + " " + age + " " + "años y me gustan los lobos")
// se puede hacer de las dos formas
console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);


/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
console.log(toy1.price + toy2.price);

/*1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.*/
let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1)
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2);



//Iteración #3: Operadores
//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let Multiplicación = 10 * 5
console.log(Multiplicación);

//1.2 Divide 10 por 2 y muestra el resultado en un console.
let division = 10 / 2
console.log(division);

//1.3 Muestra mediante un console el resto de dividir 15 por 9.
let resto = 15 % 9
console.log(resto)
//1.4 Usa el correcto operador de asignación que resultará en o = 15,
//teniendo dos variables p = 10 y j = 5.

let p = 10
let j = 5

let o = p + j
console.log(o)

//1.5 Usa el correcto operador de asignación que resultará en i = 50,
//teniendo dos variables c = 10 y m = 5.

let c = 10
let m = 5

let i = 10 * 5
console.log(i)


//Iteración #4: Arrays


//1.1 Consigue el valor "HULK", "SPIDERMAN" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const valor = avengers[0];
console.log(valor)

const valor2 = avengers[1];
console.log(valor2);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2[0] = "IRONMAN";
console.log(avengers2);

//avengers2.splice(0, 1, "IROMAN");
//console.log(avengers2)



//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length);


/*para consolar el valor ose que salga los elementos que tiene el array dentro*/
//console.log(avengers3[0]);
//console.log(avengers3[1]);
//console.log(avengers3[2]);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//esta es otra forma de hacerlo
//console.log(rickAndMortyCharacters[4]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop()
console.log(rickAndMortyCharacters1)
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 5])
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1])
//esta es otra forma de hacerlo
//console.log(rickAndMortyCharacters1[0]);
//console.log(rickAndMortyCharacters1[4]);



//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2)