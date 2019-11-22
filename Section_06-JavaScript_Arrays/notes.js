let notes = ["Note 1", "Note 2", "Note 3"]


/* ARRAY METHODS */

// push() method - Add to end of array
notes.push("Note 4") // [ 'Note 1', 'Note 2', 'Note 3', 'Note 4' ]

// pop() method - Remove from end of array
// Note: You can remember the item removed by assigning it to a variable, in case you want to save it or allow for undo 
// functionality. Or just use it alone
let removed = notes.pop() // // [ 'Note 1', 'Note 2', 'Note 3' ]

// shift() method - Remove first item from array
notes.shift() // // [ Note 2', 'Note 3' ]

// unshift() method - Add to first spot in array
notes.unshift('New first note!') // [ 'New first note!', 'Note 2', 'Note 3' ]

// splice() method - Add or Remove items from middle of array. First value is where to start, second value is how many to add
// splice(1,1) would start at index 1 and remove 2 items, turning [1,2,3,4] to [1,4]
// splice(1, 0, 'new item') would add to te array, turning [1,4] to [1, 'new item', 4]
// splice(1,1,'replace new item') would swap spots, turning [1, 'new item', 4] to [1, 'replace new item', 4]

notes.splice(1, 1) // [ 'New first note!', 'Note 3' ]
notes.splice(1, 0, 'newly inserted note in middle'); // [ 'New first note!', 'newly inserted note in middle', 'Note 3' ]
notes.splice(1, 1, 'replacing newly inserted item') // [ 'New first note!', 'replacing newly inserted item', 'Note 3' ]


// Bracket Notation also allows changing the value of a given element
notes[2] = "The new and improved note 3!"

/* LOOPING */

// forEach() method - takes function. Two ways to do that.
// 1) create a new variable and pass that variable in: const doThis = function() {...}
// 2) define function in-line, or a callback function. Has two inherent args - item and index

/*
notes.forEach(function (item, index) {
    console.log(`${index}: ${item}`)
})
*/

// for Loop - gives greater flexibility. Can do execute a certain number of times rather than for every item, 
// so it could print just the top-3. Also, not only on arrays.

/*
for (let count = 3; count >= 0; count--) { // 3...2...1...Go!!!
    if (count > 0) console.log(count)
    if (count === 0) console.log('Go!!!')
}
*/

// 1st note, 2nd note, 3rd note
/*

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
*/

// 3rd note, 2nd note, 1st note

/*
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}
*/


notes = [
    {
        title: 'My next trip',
        body: 'Go to Spain'
    }, {
        title: 'Habits to work on',
        body: 'Not biting nails'
    }, {
        title: 'Office modifications',
        body: 'Get a new seat. Get 2 new identical monitors.'
    }
]
console.log(notes)

/* indexOf() method - returns index if note exists and -1 if not */
// indexOf for non-objects woud go like: console.log(notes.indexOf('New first note!'))
// for Objects, equality is based on same object in memory, not same contents. This breaks indexOf()


// findIndex() method is better for objects. It also works for arrays of other types, as well
// takes a function as an arg. Assign it to a variable to keep access to the index.
// findIndex stops once it finds the first matching item for efficiency
const index = notes.findIndex(function (item, index) {
    return item.title === 'Habits to work on'
})

/*
const findNote = function (notesArr, noteTitle) {
    // index will be -1 if note does not exist. If it does exist, then its index is stored here
    const noteIndex = notesArr.findIndex(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notesArr[noteIndex]
}
*/

/* find() method works similarly to findNote above, except instead of finding index, it returns the match itself or undefined if no item exists */


const findNote = function (notesArr, noteTitle) {
    // index will be -1 if note does not exist. If it does exist, then its index is stored here
    return  notesArr.find(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'hAbIS TO WORK on')
console.log(note)


