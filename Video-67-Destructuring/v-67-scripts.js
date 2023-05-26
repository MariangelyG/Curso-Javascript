/*
https://developer.mozilla.org/es/docs/Web/Javascript/Referencia/Operadores/Destructuring_assignment

La destructuracion es una expresion de javascript que hace posible la extraccion de datos de arreglos u objetos
*/

const person = {
    name: "Mariangely",
    age: 32,
    email: "mariangelygonzalez14@gmail.com"
}
// // FORMA TRADICIONAL
// // const name = person.name
// // const age = person.age
// // const email = person.email

// // DESTRUCTURING
const{name, age, email} = person
console.log (`Tu nombre es ${name}, tienes ${age} años y tu email es ${email}`)

// // OTRA FORMA DESTRUCTURING CAMBIANDO EL NOMBRE DE LAS VARIABLE. 
// const{name: nombre, age: edad, email: correo} = person
// console.log(nombre, edad, correo)

const numbers = [1,2,3,4]
const[a,s,d,cuartaPosicion]= numbers
console.log(cuartaPosicion)


const printPerson = ({name})=>{
    console.log(name)    
}
// const printPerson = ({name: nombre})=> {
//     console.log(nombre)
// }
printPerson(person)

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}
getUsers()