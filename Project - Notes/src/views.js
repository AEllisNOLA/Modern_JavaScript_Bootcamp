import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate DOM structure for a note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement('a')
    const textElement = document.createElement('p')
    const statusElement = document.createElement('p')

    // Set Note text

    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
    // Set up note title text
    noteElement.appendChild(textElement)
    textElement.classList.add('list-item__title')

    // Set up the link
    noteElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.classList.add('list-item')

    // Set up status
    statusElement.textContent = generateLastEdited(note.updatedAt)
    statusElement.classList.add('list-item__subtitle')
    noteElement.appendChild(statusElement)

    return noteElement
}

// Render Application notes
const renderNotes = () => {
    // Grab DOM
    const notesElement = document.querySelector('#notes-list')
    // Retrieve filters and notes
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)

    // Return all notes that match user query
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // Clear all previous notes to avoid duplication
    notesElement.innerHTML = ''

    if (filteredNotes.length > 0) {
        // Repopulate notes with only those with a title matching the user query
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note)
            notesElement.appendChild(noteElement)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show.'
        emptyMessage.classList.add('empty-message')
        notesElement.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteId) => {

    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const lastEditedElement = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign(`/index.html`)
    }

    // Set note data
    titleElement.value = note.title
    bodyElement.value = note.body
    lastEditedElement.textContent = generateLastEdited(note.timestamp)
}

// Generate time message
const generateLastEdited = (timestamp) => `Lasted edited ${moment(timestamp).fromNow()}`

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }