// Sintaxis}

    // const numbers = [12, 15, 23, 28, 36, 48, 60]
    // console.log(...numbers)

// Enviar elementos en un array a una funcion

    // const addNumbers = (a,b,c) =>{
    //     console.log(a+b+c)
    // }
    // let numbersToAdd = [1,2,3]
    // addNumbers(...numbersToAdd)

// Añadir un array a otro array

    // let users = ['Javier', 'Josefa', 'Francisco', 'Carmen', 'Alicia']

    // let newUsers = ['Valentina', 'Luis', 'Veronica', 'Pamela']

    // // Se puede hacer asi o con los tres puntos y añade todo. 
    // users.push(newUsers[0], newUsers[1], newUsers[2], newUsers[3])
    // users.push(...newUsers)
    // console.log(users);

// Copiar arrays

    // let arr1 = [1, 2, 3, 4, 5,6 ,7]
    // let arr2 = [...arr1]
    // console.log(arr2);

// Concatenar arrays
        
    // let arr1 = [1, 2, 3, 4]
    // let arr2 = [5, 6, 7]
    // let arrConcat = arr1.concat(arr2)
    // console.log(arrConcat);

    // let arr3 = [10, 11, 12, 13]
    // let arr4 = [14, 15, 16]
    // let arrConcat = [...arr3,...arr4]
    // console.log(arrConcat);

// Enviar un numero indefinido de argumentos a una funcion (parametros REST)

    // const restParms = (...numbers) => {
    //     console.log(numbers)
    // } 
    // restParms(1,2,3,4,5,6,7,8,9,10)

 // Trabajar con libreria Math
 
    const numbers = [-12, 15, 20, 69, 50, 70]
    console.log(Math.max(...numbers))
    console.log(Math.min(...numbers))
    
// Eliminar elementos duplicados de un array

    const numbers2 = [2,15,9,71,2,8,15,71]
    console.log(new Set(numbers2))