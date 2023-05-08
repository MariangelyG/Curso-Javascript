// Solicite un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero con el mensaje "es par" o "es impar"

let num = parseInt(prompt("Introduce un número"))

for(let i=1; i<=num; i++){
    if(i%2==0){
        console.log(`${i} - es par`);
    }
    else{
        console.log(`${i} - es impar`);
        }
    
}