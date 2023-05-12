// ATRIBUTOS
//element.getAttribute('attribute')

        const title = document.getElementById('title')
        const name = document.getElementById('name')


        console.log(name.getAttribute('type'))

// element.setAttribute('attribute', 'value')
        name.setAttribute('type','radio')

// CLASES

// element.classList.add('class','class',...)
        title.classList.add('main-title', 'other-title')

// element.classList.remove('class','class',...)
        title.classList.remove('main-title', 'title')

// element.classList.contains('class')
        if(title.classList.contains('title'))
        console.log(`Title tiene la clase title`)
        else console.log(`Title no tiene la clase title`)

// // element.classList.replace('oldClass',newClass)
        title.classList.replace('other-title', 'title')

// // ATRIBUTOS DIRECTOS
// // id
        console.log(title.innerHTML)
        console.log(title.textContent)

// // value
        console.log(name.value.length)

        // console.log(title)
        // console.log(name)