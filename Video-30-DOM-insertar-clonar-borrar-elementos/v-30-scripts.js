/*
Insertar y eliminar elementos II

parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia. 

SOPORTE TOTAL
parent.insertAdjacentElement(position, element)

parent.insertAdjacentHTML(position, HTML)
parent.insertAdjacentText(position, text)

POSITIONS:
    beforebegin : antes de que empiece (hermano anterior)
    afterbegin: despues de que empiece (primer hijo)
    beforeend: antes de que se acabe (ultimo hijo)
    afterend: despues de que se acabe (hermano siguiente)

parent.replaceChild(newChild, oldChild)- remplaza un hijo por otro. 
*/
const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"
list.insertBefore(newElement, list.children[0])

// list.children[0].insertAdjacentElement('beforebegin', newElement)
// list.insertAdjacentElement('afterbegin', newElement)
// list.insertAdjacentElement('beforeend', newElement)
// list.children[1].insertAdjacentElement('afterend', newElement)

// list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

// list.replaceChild(newElement, list.children[0])

/*
DOM manipulation convenience methods - JQuery like 
https://caniuse.com/#search-jquery-like

positions:
    parent.before()- antes de que empiece (hermano anterior)
    parent.prepend() - despues de que empiece (primer hijo)
    parent.append() - antes de que se acabe (ultimo hijo)
    parent.after() - despues de que se acabe (hermano siguiente)

    child.replaceWith(newChlid)
*/

// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.children[1].after(newElement)

// list.children[1].replaceWith(newElement)
/*

CLONAR Y ELIMINAR ELEMENTOS
    element.cloneNode(true|false) - clona el nodo, si le pasamos true clona todo el elemento con los hijos,  
     si le pasamos false clona solo el elemento SIN HIJOS
    element.remove() - elimina el nodo del DOM
    element.removeChild(child)- elimina el nodo hijo del DOM
*/


// list.after(list.cloneNode(true))

// list.remove()

// list.removeChild(list.children[0])

