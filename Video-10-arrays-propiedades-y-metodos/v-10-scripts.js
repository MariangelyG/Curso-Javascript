// Arrays Propiedades
// .length= devuelve el numero de posiciones que contiene el array

let numbers = [1,2,3,4,5,1];
// console.log(numbers.length);

// Arrays Metodos
// Array.isarray(variable a evaluar): devueleve true si la variable es un array

// let number = 4;
// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));

// eliminar un elemeto
// .shift() elimina el primer elemento del array y devuelve ese elemento.

// console.log(numbers);
// let deleteElement = numbers.shift();
// console.log(numbers);
// console.log(deleteElement);

// .pop () elimina el ultimo elemento de un array y devuelve ese elemento

// console.log(numbers);
// numbers.pop();
// console.log(numbers)

// Añadir elemento a un Array

// .push(element1, element2,...) añade uno o mas elementos al final del array y devuelve la nueva longitud.

// console.log(numbers);
// let newLength = numbers.push(6);
// console.log(numbers);
// console.log(newLength)

// .unshift (element1,element2,...) añade uno o mas elemento al comienzo de un array y devuelve la nueva longitud
// console.log(numbers);
// let newLength2 = numbers.unshift(0);
// console.log(numbers);

// Para buscar un elemento dentro de un Array

// indexof()- devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si no es encontrado.

// console.log(numbers);
// console.log(numbers.indexOf(5));

// lastindexof()- devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

// console.log(numbers);
// console.log(numbers.lastIndexOf(1));

// reverse(): invierte el orden de los elementos del Array

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// .join("") devuelve un string con el separador que indiquemos, por defecto son comas.

// console.log(numbers);
// console.log(numbers.join('-'));
// console.log(numbers.join('/'));
// console.log(numbers.join('.'));
// console.log(numbers.join(' '));

// .splice(a,b,items)- Cambia el contenido de un array eliminando o agregando MediaElementAudioSourceNode.

// a- Indice de inicio.
// b- numero de elementos (opcional- va dentro de [])
// items- elementos a añadir en el caso que se añadan (opcional- va en [])

// console.log(numbers)
// numbers.splice(3) elimina desde la posicion 3 en adelante. 
// numbers.splice(2,2) elimina desde la posicion 2, 2 elementos, los demas se siguen viendo
// numbers.splice(2,2, 10,23,54) 
// desde la posicion 2, elimina 2 elementos y añade el numero 10, 23 y 54. TODO LO QUE ESTA DESPUES DE LA SEGUNADA COMA, ES LO QUE SE VA AÑADIR. 
// numbers.splice(2,0, 10,23,54) 
// si no se quieren eliminar elementos y solo se quiere añadir, se coloca en el primer valor el numero de la posicion donde se va a comenzar añadir,  en segundo valor 0 para que no elimine nada, y en el tercer valor los elementos que se van añadir. 
// console.log(numbers)

// .slice(a,b) - extrae elementos de un array desde el indice a hasta el b. si no existe lo hace desde a hasta el finally. si no existe ni a ni b hace una copia del crossOriginIsolated. 
// let newNumbers = numbers.slice(); hace dos copias iguales del array
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2); hace un array nuevo, desde la posicion que se le indique
// console.log(numbers);
// console.log(newNumbers);

// 

