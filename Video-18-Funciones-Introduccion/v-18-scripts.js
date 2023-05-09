// declarar la funcion
// function saludar(){
//     console.log("Hola")
// }

// const saludar = () => console.log("Hola");

// Invocar la funcion para que se ejecute. importante colocar los ()
// saludarUsuario()

// recibe parametros
// const saludarUsuario = (user) => console.log(`Hola ${user}`);

// // Cuando se tiene parametros es importante que cuando se invoque se le coloque el parametro para que se pueda ejecutar.
// saludarUsuario("Pedro")
// saludarUsuario("Maria")
// saludarUsuario("Sofia")

// Cuando se tiene solo una linea de codigo no es necesario colocar los {} si se colocan hay que colocar el return para que se pueda ejecutar. 
// const suma = (num1, num2) => {
//     if(num1 == 2){ 
//     return num1+num2
// }
// console.log("Esto no se va a ejecutar si entra en el if");
// return num1
// }
// console.log(suma(7,3));

const suma = (num1, num2) => num1+num2
let result = suma(5,5)
console.log(result);