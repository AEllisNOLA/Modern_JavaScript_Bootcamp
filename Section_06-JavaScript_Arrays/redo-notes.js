/* 38. Array Basics */

const notes = ['Note 1', 'Note 2', 'Note 3']

// .length shows how many items are in the array
// console.log(notes.length)  ==>  3

// Use index to grab individual item in array
// console.log(notes[1])  ==> 'Note 2'
// console.log(notes[3])  ==> undefined
// console.log(notes[notes.length - 1])  ==> 'Note 3' (last item of array)


/* 39. Manipulating Arrays with Methods */

// .push() - adds note to end
// notes.push('Note 4')  ==>  [ 'Note 1', 'Note 2', 'Note 3', 'Note 4' ]

// .pop() - removed from end. You can assign it to a variable to keep track of what was removed
// poppedNote = notes.pop()
// console.log(notes)  ==>  [ 'Note 1', 'Note 2' ]
// console.log(poppedNote)  ==>  'Note 3'

// .shift() - removes first item of array
// shiftedNote = notes.shift()
// console.log(notes)  ==>  [ 'Note 2', 'Note 3' ]
// console.log(shiftedNote)  ==> 'Note 1'

// .unshift() - adds item to the beginning
// notes.unshift('Note 0')
// console.log(notes)  ==>  [ 'Note 0', 'Note 1', 'Note 2', 'Note 3' ]

// splice() - add elemnents to middle of array OR remove elements from anywhere in the array. Takes index of starting point and how many elements beyond that point.
// REMOVE
// splicedNote = notes.splice(1, 1)
// console.log(notes)  ==>  [ 'Note 1', 'Note 3' ]
// console.log(splicedNote)  =>  [ 'Note 2' ]   (Note that it returns as an array since you can splice multiple things)

// ADD
// addedNote = notes.splice(1, 0, 'Note 1.5')
// console.log(notes)  ==>  [ 'Note 1', 'Note 1.5', 'Note 2', 'Note 3' ]

// addedNote = notes.splice(1, 0, 'Note 1.5', 'Note 1.75')
// console.log(notes)  ==>  [ 'Note 1', 'Note 1.5', 'Note 1.75', 'Note 2', 'Note 3' ]  (Yes, it can add multiples)

// REPLACE
// notes.splice(1,1,'New middle note!')
// console.log(notes)  ==>  [ 'Note 1', 'New middle note!', 'Note 3' ]  (However, notes[1]='New middle note!' does the same thing and is less conveluted)


/* 40. Looping Over Arrays */
// General: A callback function is a function that gets passed to a function
// .forEach() takes a callback function that does something to each item in the array.
// .forEach() gives two optional arguments - the item and the index
// .forEach() is ONLY FOR ARRAYS


/* 
notes.forEach(function(item, index) {
    console.log(`${index+1} - ${item}`)
})

OUTPUT: 
1 - Note 1
2 - Note 2
3 - Note 3
*/

/* 41. The FOR loop */

// for is great because it works on OBJECTS. It is also great because forEach() will do EVERY item in an array. 
// The for loop allows to only print the top 3, or even items, etc.

/*
for (let i = 1; i <= 3; i++) {
    console.log(i)
}
*/

/*
for(let i = 10; i >= 0; i--) {
    if(i % 2 === 0) {
        console.log(i)
    }
}
*/

/*
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}
*/

/*
for (let i = notes.length -1; i >= 0; i--) {
    console.log(notes[i])
}
*/

/* 42. Searching through Arrays (1 ) */

// indexOf(content) - finds the index of the item in the array that matches the content passed in as an argument. If content does not exist, returns -1
// .indexOf always uses === so it does not work with objects
// console.log(notes.indexOf('Note 2'))  ==>  1


const notesObj = [{
    title: 'My next trip',
    body: 'Los Angeles'
}, {
    title: 'Habbits to work on',
    body: 'Stop biting nails'
}, {
    title: 'Office modifications',
    body: 'Get new monitor(s)'
}]

// console.log(notesObj.indexOf({}))  ==>  false. Does not work because an empty object is not === an empty object. Objects are equal if they are the same object in memory.

/*
let obj1 = {};
let obj2 = obj1;
console.log(obj1 === obj2)  ==>  true
*/

// .findIndex() - get the index of an object. Once it finds the object, it stops running.

/*
    const noteIndex = notesObj.findIndex(function(item, index) {
    return item.title === 'Office modifications'
})
*/
// console.log(noteIndex)  ==>  2

/* 43. Searching through Arrays (2) */
/*
const findNote = function (notes, noteTitle) {
    // start by finding its index
    const noteIndex = notes.findIndex(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
    // use bracket notation to show note
    return notes[noteIndex].body
}
*/


/* A simpler way to do the above
.find() returns match itself, not the index
*/
/*
const findNote = function (notes, noteTitle) {
    const note = notes.find(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}
*/



/* or the even shorter way! */
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// console.log(findNote(notesObj, 'office modifications'))  ==> { title: 'Office modifications', body: 'Get new monitor(s)' }

/* 44. Filtering Arrays */
// filter() - accepts a cb function with item and index. It returns a new array and doesn't mess with the old one

/*
const filteredNotes = notesObj.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyMatch = note.body.toLowerCase().includes('office')
    return isTitleMatch || isBodyMatch
})
*/


/*
const findNotes = function(arr, query) {
    const filteredNotes = arr.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    return filteredNotes
}
*/

const findNotes = function(arr, query) {
    return arr.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


// console.log(findNotes(notesObj, 'TRIP'))


/* 45 Sorting Arrays */

// .sort() will sort simple datatypes. For more complex datadtypes like objects, you can pass a compare function to specify its behavior
// .sort() will compare two items, so it takes arguments a and b. if a before b, it returns -1. If b before a, returns 1. if nothing changes, it returns 0 and order doesnt change
// it modifies array directly so it does not return anything.
// there can be many different sorting functions for different behavior. Sort by date/title/isComplete, etc.

const sortNotes = function(arr) {
    arr.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notesObj)
console.log(notesObj)


