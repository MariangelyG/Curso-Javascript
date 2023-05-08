// Solicite un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero, con el mensaje es par o impar

let num = prompt("Introduzca un numero");

for(let i=1; i<=num;i++){

    let paroimpar = i % 2 === 0 ? "par" : "impar";
     console.log(`${i} es ${paroimpar}`);
   

}