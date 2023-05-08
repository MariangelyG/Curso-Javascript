// Escribe un programa que pueda calcular el area de tres figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo.
    // triangulo = b * h/2
    // rectangulo = b * h
    // circulo = PI * r² (pi * radio al cuadrado) 

    let figure = prompt("Introduce la figura geometrica de la que quieres calcular el área: triangle, rectangle or  circle")

    let base;
    let height;
    let radius;

    switch(figure){
        case "triangle":
            base=prompt("Introduce la base del triángulo")
            height=prompt("Introduce la altura del triángulo")
            console.log(`El área del triangulo es ${(base*height)/2}`)
            break
        case "rectangle":
            base=prompt("Introduce la base del rectángulo")
            height=prompt("Introduce la altura del rectángulo")
            console.log(`El área del rectangulo es ${base*height}`)
            break
        case "circle":
            radius=prompt("Introduce el radio del círculo")
            console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`)    
            break
            default: console.log("La figura geométrica no es válida")    
    }