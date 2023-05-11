// Métodos:
// .from() : convierte el array en un elemento iterable(es todo aquello que se puede recorrer)
    // let word = "Hola mundo"
    // console.log(Array.from(word));

// .sort([callback]) : ordena los elementos de un array alfabeticamente (valor unicode) si se le pasa un callback los ordena en funcion que se le pase

    // const letras = ["b", "c", "z", "a"]
    // console.log(letras.sort())

    // const numeros = [1,8,100,300,3]
    // console.log(numeros.sort((a,b)=>a-b))
    // // ordena de menor a mayor
    // console.log(numeros.sort((a,b)=>b-a))
    // // Ordena de mayor a menor


// .forEach(callback(currentValue,[index])) : ejecuta la funcion indicada una vez por cada elemento del Array

    // const numbers = [12, 25, 47,84, 98]
    // numbers.forEach((number)=>console.log(number))

    // numbers.forEach((number,index) =>
    // console.log(`${number} está en la posicion ${index}`))


// .some(callback): comprueba si al menos un elemento del array cumple la condicion.

// .every(callback): comprueba si todos los elementos del array cumplen la condicion.

    // const words = ["HTML", "CSS", "Javascript", "PHP"]

    // console.log(words.some(word => word.length>10));
    // console.log(words.every(word => word.length>2));


// .map(callback); transforma todos lo elementos del array y devuelve un nuevo array.

    // const numbers = [2, 4, 20, 13, 25]

    // numbers.map(number => console.log(number * 2))

    // // es lo mismo que hacer
    // for (const number of numbers){
    //     console.log(number * 2)
    // }



// .filter(callback): filtra todos los elementos del array que cumplan la condicion y devuelve un array nuevo.

    // const numbers = [2, 4, 20, 13, 25]

    // const numbers2 = numbers.filter(number => number >10)

    //     console.log(numbers2)


// .reduce(callback): reduce todos los elementos del array a un unico valor

    // const numbers = [1, 2, 3, 4, 5]

    // console.log(numbers.reduce((a,b)=>a+b))