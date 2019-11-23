import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

// Initial render
renderNotes()

// Create note
document.querySelector('#create-note').addEventListener('click', (e) => {
    // id is returned from createNote()
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

// Search function - re-renders upon input change
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

/* Update info across tabs */

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})
