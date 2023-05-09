const person = {
    name: "Juan",
    age: 25,
    sons: ["Laura", "Diego", "Thomas", "Enrique", "Camila"]
}

console.log(person);
console.log(person.name);
console.log(person["name"]);

for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
}

for(const son of person.sons){
    console.log(son);
}

console.log(`Hola ${person.name}, tienes ${person.age} y tus hijos son ${person.sons.join(", ")}`)