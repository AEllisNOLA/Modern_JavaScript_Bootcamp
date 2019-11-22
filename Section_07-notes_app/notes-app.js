const notes = [
    {
        title: 'A funny joke',
        body: 'This is a sample note'
    }, {
        title: 'Remember to set vet appointment',
        body: 'This is a sample note'
    }, {
        title: 'Try to bench more',
        body: 'This is a sample note'
    }
]

const filters = {
    searchText: ''
}

// Takes note title and filter's search text and returns matching notes, clears previous display and replaces it with new matching items
const renderNotes = function (notes, filters) {
    // return all notes that match what the user is searching for
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // clear all previous notes to prevent needless duplication issue
    document.querySelector('#notes-list').innerHTML = ''
    // re-create all of those just cleared, but with the proper title matching search
    filteredNotes.forEach(function (note) {
        noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes-list').appendChild(noteElement)
    })
}



// search function - initial rendering 
renderNotes(notes, filters)

// search function - re-render upon input change
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// create note
document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('User is trying to add notes')
    console.log(e) // show all properties
    e.target.textContent = 'The button was clicked!'
})

/*
// submit name form
document.querySelector('#name-form').addEventListener('submit', function(e) {
    // prevent auto-refresh
    e.preventDefault()
    // e.target gets to the DOM element of the form. Then 'elements' lets us access all fields in form
    console.log(e.target.elements.firstName.value)
    // once done with data, clear field
    e.target.elements.firstName.value = ''
    console.log(e.target.elements.firstName.value)
})
*/
/*
// remove all notes
document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
            note.remove()
    })
})
*/



/* Remove a single item */
// const p = document.querySelector('p')
// p.remove()

/* Remove several items of the same type */
/*
const ps = document.querySelectorAll('p')
ps.forEach(function (item, index) {
    // item.remove()  -->  removes all p tags
    // console.log(item.textContent)  -->  prints all text content of p tags
    // item.textContent = 'REDACTED' -->  Changes all text content to REDACTED
})
*/

/* 52 - Adding Elements to DOM */

// 1) add a new element
// 2) add content using .textContent
// 3) place it somewhere with appendChild()
// appendChild adds the element as the last item of a certain item. So if you choose body, it becomes the last item in the body

/*
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph element from JS'
document.querySelector('body').appendChild(newParagraph)
*/
/* 53 Handling User Inputs */

// An event listener is a function that runs when the user takes an action, such as clicks, hovers, etc



/* 54 Advanced Queries */
/*
document.querySelector('#remove-all').addEventListener('click', function (e) {
    console.log('User is trying to remove all notes')
})
*/
/*
This is bad form because it can lead to mix-ups. Be more specific with ids and classes
querySelectorAll is typically used with classes while querySelector is with IDs
*/

/*
document.querySelector('#checkbox').addEventListener('change', function(e) {
    console.log(e.target.checked)
})
*/

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})