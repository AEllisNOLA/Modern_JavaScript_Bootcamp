const noteID = location.hash.substring(1)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
let lastEditedElement = document.querySelector('#last-edited')
let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign(`/index.html`)
}

// Set note data
titleElement.value = note.title
bodyElement.value = note.body
lastEditedElement.textContent = generateLastEdited(note.timestamp)



lastEditedElement.textContent = `Lasted edited ${moment(note.updatedAt).fromNow()}`

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.timestamp)

    saveNotesToLocal(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = generateLastEdited(note.timestamp)

    saveNotesToLocal(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotesToLocal(notes)
    location.assign(`/index.html`)
})



// allows changes to be reflected on multiple tabs
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // assign changes to notes array
        notes = JSON.parse(e.newValue)

        note = notes.find(function (note) {
            return note.id === noteID
        })

        if (note === undefined) {
            location.assign(`/index.html`)
        }

        // Set note data
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEditedElement.textContent = generateLastEdited(note.timestamp)

    }
})

