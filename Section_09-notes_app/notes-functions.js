'use strict'

// Retrieve data saved to local storage. If data exists, parse data. If no data, return empty array for new data.
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

}

// save notes to local storage
const saveNotesToLocal = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    // go through all notes. if there is a note with the proper ID, return its index
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM structure for a note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotesToLocal(notes)
        renderNotes(notes, filters)
    })


    // Set up Delete note button
    button.textContent = 'Delete'
    noteElement.appendChild(button)

    // Set Note text

    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }

    textElement.setAttribute('href', `/edit.html#${note.id}`)

    // Set up note title text
    noteElement.appendChild(textElement)

    return noteElement
}




// Render Application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    // Return all notes that match user query
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // Clear all previous notes to avoid duplication
    document.querySelector('#notes-list').innerHTML = ''
    // Repopulate notes with only those with a title matching the user query
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes-list').appendChild(noteElement)
    })
}



// generate time message
const generateLastEdited = (timestamp) => `Lasted edited ${moment(timestamp).fromNow()}`

// Sort notes by created, edited or alphabetical
const sortNotes = (notes, sortBy) => {
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


/* ******************************************************************************** */

/*

Now getSavedNotes(). Formerly:

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

*/

/* ******************************************************************************** */

/*

Now generateNoteDOM(). Formerly:

noteElement = document.createElement('p')
if (note.title.length > 0) {
    noteElement.textContent = note.title
} else {
    noteElement.textContent = 'Unnamed note'
}

*/