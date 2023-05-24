// OTRA FORMA DE CREAR EXPRESIONES REGULARES
    const text = document.getElementById('text').textContent 
    const regEx = /lorem/gi
    const regEx2 = new RegExp('lorem', 'gi')
    const regEx3 = new RegExp('/lorem/', 'gi')

    console.log(regEx.test(text))
    console.log(text.includes('Lorem'))
/*
Comodines
    Sustitucion: Define un comodin dentro del patron. El simbolo es el "."
    Listado de caracteres validos: entre corchetes se pone una lista de los caracteres validos. [aeiou] con esto se agarran todas las vocales.
    Rangos: entre corchetes si ponemos un guion entre dos caracteres establecemos un rango. {a-z} todas las letras minusculas.
    TABLA ASCCI https://ascii.cl/es/
    Mezclas entre rangos y listas:
    Podemos unir los dos anteriores en una sola expresion. [0-5ou] serian los numeros de 0 al 5, la letra "o" y la letra "u"
    Cadenas completas:
    para establecer una cadena completa debe ir entre parentesis, si queremos mas palabras iran separadas por un pipe (lorem|amet) es valida la palabra "lorem y la palabra "amet */


