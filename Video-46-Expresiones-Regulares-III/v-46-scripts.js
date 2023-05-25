/* Operadores DELIMITADORES
    ^Antes de este simbolo no puede haber nada 
    $Despues de este simbolo no puede haber nada.
    ^hola$

Operadores de CANTIDAD

    -llaves: lo que esta antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones       
     posibles.
        {n} se tiene que repetir n veces
        {n,m} se tiene que repetir entre n y m veces, ambas incluidas.
        {n,}se tiene que repetir como minimo n veces y sin maximo.
^[a-zA-Z]{1,3}@{1}$

-asterisco: lo que esta antes del asterisco puede estar, puede no estar y se puede repetir. .*@.*\..*

-interrogacion: lo que esta antes de la interrogacion puede no estar, pero si esta solo puede aparecer una vez
^[ae]?$

-operador mas: lo que esta antes del + tiene que estra una vez como minimo A-[0-9]+ 
*/