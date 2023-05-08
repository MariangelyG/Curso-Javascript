// Escribe un programa que pueda calcular el area de tres figuras geometricas: triangulo, circulo y rectangulo. En primer lugar pregunta de que figura se quiere calcular el area y despues solicita los datos que se necesiten para calcularlo. 

const figuras = prompt("¿Qué figura quieres calcular?");
let triangulo = 0;
let rectangulo = 0;
let círculo = 0;

switch(figuras){ 
case "triangulo": 
    let base = prompt("Ingrese la base del triangulo");
    let altura =prompt("Ingrese la altura del triangulo");
    let area = "triangulo"
    area = (base * altura) / 2;
    console.log(`El area del triangulo es ${area} cm²`)
    break

case "rectangulo":
let Rbase = prompt("Ingrese la base del rectangulo");
let Raltura = prompt("Ingrese la altura del rectangulo");
let Rarea = "rectangulo"
Rarea = (Rbase * Raltura);
console.log(`El area del rectangulo es ${Rarea} cm²`)
break

case "circulo":
const pi = 3.1416;
	let = "Carea,radio";
	radio= (prompt("Ingresar el radio del circulo"));
	Carea = pi*radio*radio;
	console.log(`El área del circulo es ${Carea}`);
}