import moment from 'moment'
import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
let lastEditedElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

// lastEditedElement.textContent = `Last edited ${moment(note.timestamp).fromNow()}`

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })

    lastEditedElement.textContent = generateLastEdited(note.timestamp)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })

    lastEditedElement.textContent = generateLastEdited(note.timestamp)
})

removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign(`/index.html`)
})



// allows changes to be reflected on multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})

