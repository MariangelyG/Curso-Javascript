let names = ["Luis", "Jose", "Juan", "Maria"];

for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index);
}

// Palabras reservadas de bucles:
// break:rompe el bucle.
// continue: se salta la posicion que se indique y continua ejecutansose. 

// for (let i = 0; i < names.length; i++){
//     if(names[i]==="Juan"){
//         break
//     }
//     console.log(names[i]);
// }

// for (let i = 0; i < names.length; i++){
//     if(names[i]==="Juan"){
//         continue
//     }
//     console.log(names[i]);
// }