let favColor = document.querySelector('#color')

let favPlace = document.querySelector('#place')

let favRitual = document.querySelector('#ritual')

let colorAlert = () => {
    alert('My favorite color is blue')
}

let placeAlert = () => {
    alert('My favorite place is Italy')
}

let ritualAlert = () => {
    alert('My favorite ritual is daily meditation')
}

favColor.addEventListener('click', colorAlert)

favPlace.addEventListener('click', placeAlert)

favRitual.addEventListener('click', ritualAlert)