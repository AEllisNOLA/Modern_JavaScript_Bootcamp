'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

// Initial render
renderNotes(notes, filters)

// Search function - re-renders upon input change
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// Create note
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotesToLocal(notes)
    location.assign(`/edit.html#${id}`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})










/* ******************************************************************************** */


/* 62. SAVING DATA TO LOCAL STORAGE */

/* Create - takes key and value. */
// localStorage.setItem('location', 'New Orleans')

/* Read - takes key*/
// console.log(localStorage.getItem('location'))

/* Update - same as Create - setItem(key, value) */

/* Delete - localStorage.removeItem(key)*/
// localStorage.removeItem('location')

/* Delete All local storage - .clear()*/
// localStorage.clear()

// NOTE: Local Storage only supports strings. You need to convert array to string in order to place in local storage

/*
const user = {
    name: 'Anthony',
    location: 'New Orleans'
}
// convert to string
const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)
*/

/* Retrieve Local Storage data */
/*
const userJSON = localStorage.getItem('user')
// above will return string. need to parse to become object.
const user = JSON.parse(userJSON)
console.log(`My name is ${user.name} and I am from ${user.location}`)
*/
