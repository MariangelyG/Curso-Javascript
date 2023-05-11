// document.getElementByID('id') acceder a un elemento a traves de su id

    const title = document.getElementById('title')
    title.textContent = 'DOM - accediendo a nodos'

// document | element .querySelector('selectorCSS) - accede al primer elemento que coincida con el selector CSS

    const paragraph = document.querySelector('.paragraph')
    const span = document.getElementById('title').querySelector("span")
    console.log(span.textContent);

// document | element .query.SelectorAll('selectorCSS') - accede a todos los elementos que coincidan con el selector CSS, devuelve un nodelist

const paragraphs = document.querySelectorAll('.paragraph')
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))
paragraphsArray.map(p=>p.style.color="blue")