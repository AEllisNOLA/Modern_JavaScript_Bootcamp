import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Retrieve data saved to local storage. If data exists, parse data. If no data, return empty array for new data.
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// save notes to local storage
const saveNotesToLocal = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

/* Expose data in notes array for exporting */
const getNotes = () => notes

/* Create Note */
const createNote = () => {
    const id = uuidv4();
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotesToLocal()

    return id
}

// Remove a note from the list
const removeNote = (id) => {
    // go through all notes. if there is a note with the proper ID, return its index
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotesToLocal()
    }
}

// Sort notes by created, edited or alphabetical
const sortNotes = (sortBy) => {
    // By Edited
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
        // By Created
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
        // Alphabetical
    } else if (sortBy === 'byAlphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    else {
        return notes
    }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return undefined
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotesToLocal()
    return note
}

notes = loadNotes()



export { getNotes, createNote, removeNote, sortNotes, updateNote }

