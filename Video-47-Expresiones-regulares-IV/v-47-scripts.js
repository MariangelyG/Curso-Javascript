/* CARACTERES:

\s: Coincide con un caracter de espacio, entre ellos incluidos espacio, tab, salto de pagina, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$

\S: Coincide con todo menos caracter d espacio ^\S{5}$

\d: Coincide con un caracter de numero. Equivalente a [0-9] ^\d{5}$

\D: Coincide con cualquier caracter no numerico. Equivalente a [^0-9] ^\D{5}$

\w: Coincide con cualquier caracter alfanumerico, incluyendo el guion bajo. Equivalente a [A-Za-z0-9_] ^\w+@$

\W: Coincide con todo menos caracteres de palabra. ^\W+$


*/