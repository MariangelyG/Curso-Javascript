// 5- Escribe un programa que pida un numero entero mayor que cero y calcule su factorial.
// El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad
// !5 = 5*4*3*2*1 = 120

let num = parseInt(prompt("Introduce un numero"))
let result = 1
for(let i = num; i > 0; i--){
    result *= i
}
console.log(`El factorial de ${num} es ${result}`);