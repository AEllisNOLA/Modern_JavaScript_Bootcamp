'use strict'

const noteID = location.hash.substring(1)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
let lastEditedElement = document.querySelector('#last-edited')
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteID)

if (!note) {
    location.assign(`/index.html`)
}

// Set note data
titleElement.value = note.title
bodyElement.value = note.body
lastEditedElement.textContent = generateLastEdited(note.timestamp)

lastEditedElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.timestamp)

    saveNotesToLocal(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.timestamp)

    saveNotesToLocal(notes)
})

removeElement.addEventListener('click', () => {
    removeNote(note.id)
    saveNotesToLocal(notes)
    location.assign(`/index.html`)
})



// allows changes to be reflected on multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        // assign changes to notes array
        notes = JSON.parse(e.newValue)

        note = notes.find((note) => note.id === noteID)

        if (!note) {
            location.assign(`/index.html`)
        }

        // Set note data
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEditedElement.textContent = generateLastEdited(note.timestamp)

    }
})

