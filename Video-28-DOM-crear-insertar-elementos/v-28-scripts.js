const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// const itemList = document.createElement('LI')
// itemList.textContent = 'Lunes'

// daysList.appendChild(itemList)

title.innerHTML= 'DOM- <span>CREAR E INSERTAR ELEMENTOS</span>'

const fragment = document.createDocumentFragment()

for (const day of days){
   const itemList = document.createElement('LI')
itemList.textContent = day
fragment.appendChild(itemList)

}

daysList.appendChild(fragment)

// for (const day of days){
//     const selectItem = document.createElement('option')
//     selectItem.setAttribute('value', day.toLowerCase())
//     selectItem.textContent= day
//     fragment.appendChild(selectItem)
// }
// selectDays.appendChild(fragment)