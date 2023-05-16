// Recorrer el DOM (DOM TRAVERSING)
    // PADRE- parent(nodo del que desciende)
    //     -parentNode: devuelve el nodo del padre (que puede no ser un elemento)
    //     -parentElement: devuleve el nodo elemento padre.

    // const parent = document.getElementById('parent')
    // console.log(parent.parentElement);
  
// NOTA: Los nodos del tipo document y documentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null.

    // HIJOS:-child (nodo que desciende del padre)
    //     -childNodes: devuelve todos los nodos hijos
    //     -children : devuelve todos los nodos elementos hijos
    //     -firstChild: devuelve el primer nodo hijo.
    //     -firstElementChild: devuelve el primer nodo elemento hijo.
    //     -lastChild: devuelve el ultimo nodo hijo.
    //     -lastElementChild: devuelve el ultimo nodo elemento hijo.
    //     -hasChildNodes(): devuelve true si el nodo tienen hijos y false si no tiene.

const parent = document.getElementById('parent')
console.log(parent.childNodes);
console.log(parent.children);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastChild);
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());


    // HERMANOS- siblings (nodo al mismo nivel)
    //     - nextSibling: devuelve el siguiente nodo hermano.
    //     - nextElementSibling: devuelve el siguiente nodo elemento hermano
    //     - previousSibling: devuelve el nodo hermano anterior
    //     -previousElementSibling: devuelve el elemento nodo anterior hermano

// const parent = document.getElementById('parent')
// console.log(parent.nextSibling)
// console.log(parent.parentElement.nextElementSibling)
// console.log(parent.parentElement.previousSibling)
// console.log(parent.parentElement.previousElementSibling)

// CERCANO
//     -closest(selector): selecciona el nodo mas cercano que cumpla con el selector. aun es experimental. 