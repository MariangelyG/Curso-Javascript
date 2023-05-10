//1- Crea una clase libro
//2- La clase libro tendra titulo, autor, año y género.
//3- Crea un metodo que devuelva toda la informacion del libro.
//4- Pide 3 libros y guardalos en un array.
//5- Los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
//6- Validar que los campos no se introduzcan vacios
//7- Validar que el año sea un numero que tenga 4 digitos
//8- validar que el genero sea: aventuras, terror o fantasia.
//9- Crea una funcion que muestre todos los libros
//10- Crea una funcion que muestre los autores ordenados alfabeticamente.
//11- Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion. 

    //1-  Crea una clase libro
class Book {
    //2- La clase libro tendra titulo, autor, año y género.
    constructor(title, author,year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor(){
        return this.author
    }

    getGender(){
        return this.gender
    }
    
    //3-  Crea un metodo que devuelva toda la informacion del libro.
    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
    }

    //4-  Pide 3 libros y guardalos en un array.
    let books = []

    //5- Los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
    while (books.length < 3){
    let title = prompt("Introduce el título del libro")
    let author = prompt("Introduce el autor del libro")
    let year = prompt("Introduce el año del libro")
    let gender = prompt("Introduce el género del libro").toLowerCase()
    
    // 6- Validar que los campos no se introduzcan vacios
    if(title != " " && 
    author != " " && 
    //7- Validar que el año sea un numero que tenga 4 digitos
    !isNaN(year) && 
    year.length == 4 && 
    //8- validar que el genero sea: aventuras, terror o fantasia.
    (gender == "aventura" || gender == "terror" || gender == "fantasia")){
        books.push(new Book(title, author, year, gender))
    }
}
    //9- Crea una funcion que muestre todos los libros
    const showAllbooks = () => {
        console.log(books)
    }
  //10- Crea una funcion que muestre los autores ordenados alfabeticamente.

    const showAuthors = () => {
        let authors = []

        for (const book of books){
            authors.push(book.getAuthor());
        }
        console.log(authors.sort())
    }
    //11- Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion. 
    const showGender = () => {
      const gender = prompt("Introduce el genero a buscar")

      for (const book of books){
        if (book.getGender() == gender){
            console.log(book.bookInfo())

        }
      }
    }

    showAllbooks ()
    showAuthors ()
    showGender()

    // Para crear las funciones de mostrara todos los libros, ordenar los autores alfabeticamente y mostrar la informacion del libro pidiendo un genero, se les creo un metodo a cada uno. 