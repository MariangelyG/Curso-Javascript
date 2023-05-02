console.log(Math.E);
console.log(Math.PI);


let num = 5.2;
// // devuelve el valor absoluto del numero que se le pasa, sin + ó -
console.log(Math.abs(num));
// // devuelve el entero mas grande mayor o igual que un numero
console.log(Math.ceil(num));
// // devuelve el entero mas pequeño menor o igual que un numero
console.log(Math.floor(num));
// // recibe dos parametros, base y exponente; devuelve la potencia de X elevado a Y. siendo X y Y los numeros que se le indique.  
console.log(Math.pow(3,3));
// se utiliza para generar un numero pseudoaleatorio entre 0 y 1
console.log(Math.random());
console.log(Math.round(Math.random()*100));
// // console.log(Math.random() * (max - min)+min); formula para generar numeros aleatorios,(el math round hace que de resultados numeros enteros)
console.log(Math.round(Math.random() * (10 - 5)+5));

// redondea el numnero que se indica al que este mas cerca (redondea al numero entero mas cercano)
console.log(Math.round(num));
// // devuelve el signo de la X, que indica si es positivo, negativo ó cero-// -1 / 0 / 1
console.log(Math.sign(5)); 
// // recibe un numero como parametro y devuelve la raiz cuadrada de dicho numero. 
console.log(Math.sqrt(5)); 