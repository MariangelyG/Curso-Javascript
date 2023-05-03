// Operador ternario
// Una sentencia
let num = 2;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

// if(num % 2 == 0) console.log(`${num} es par`);
// else console.log(`${num} es impar`)



// En el caso de terner varias sentencias

(num % 2 == 0) ?
    (  

        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
     :
    (  

        console.log(`${num} es impar`), 
        console.log(`${num} es impar`)
    )

   
