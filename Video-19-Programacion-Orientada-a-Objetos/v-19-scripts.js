// Class: palabra reservada para determinar que es una clase; objeto con la primera letra en mayuscula, 
class Persona{

    // Constructor: y en parentesis los paramentros que va a tener el objeto como base; asignar las propiedades de los objetos a los parametros.

 constructor(nombre,apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
// si se quiere añadir otra propiedad, SE PUEDE HACER UTILIZANDO EL THIS
// Dentro de constructor se pueden colocar los parametros sin el this pero en los metodos si hay que obligatoriamente colocarlos. 
    this.datos = `Me llamo ${nombre} ${apellido} y tengo ${this.edad} años `
 }
// Por fuera del constructor se crean los MÉTODOS que se quieran.
//En los METODOS si hay que obligatoriamente colocarle el this, ya que estan fuera del constructor. 
saludar(){
    return `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años `
}

}
// Ya la CLASE PERSONA esta creada,  ahora vamos a crear un objeto.
 
const Juan = new Persona ("Juan", "Garcia", 23)
// LA MISMA CLASE SE PUEDE UTILIZAR PARA DIFERENTES OBJETOS
const María = new Persona ("María", "Castillo", 33)
const Camila = new Persona ("Camila", "Gonzalez", 33)

// Ver lAS PROPIEDADES DE LA CLASE
console.log(Juan);

// Ver los METODOS
console.log(Juan.saludar());
console.log(María.saludar());
console.log(Camila.saludar());