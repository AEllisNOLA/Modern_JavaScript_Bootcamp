
/* 94. OBJECTS */
const product = {
    name: 'Booky McBookface'
}


// starts in product. If product doesn't have what we need, it moves to Object.prototype, and then moves on to null


// console.log(product.hasOwnProperty('name'))  // true. It is in product

// console.log(product.hasOwnProperty('hasOwnProperty'))  // false. Not in product. Does not count Object.prototype

// console.log(product)

// Don't override under normal circumstances! (Duh)
// Object.prototype.hasOwnProperty = () => 'This is the new function'

// console.log(product.hasOwnProperty())  // This is the new function

// Object.prototype.someNewMethod = () => 'someNewMethod() is executing'

// console.log(product.someNewMethod()) // someNewMethod() is executing


/*
This is literal syntax, so no new keyword needed for the object

const product = {
    name: 'Booky McBookface'
}
*/

/*
This syntax explicitely uses new and constructor to create the object rather than implicitly
doing it behind the scenes as above

const product2 = new Object()
product.name = 'Book #2'

console.log(product)
*/

/*
Or:
const product3 = newObject({
    name: 'Book 3'
})
*/


/* 95. ARRAYS */

// primitive value - does not have properties:
// string, number, boolean will have a value to access because they have object wrapper that gives it functionality
// null, undefined will never have a value to access
// everything else is an object, including arrays and functions.

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype  --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> myNumber.prototype --> Object.prototype --> null
// Boolean: myNumber --> Boolean.prototype --> Object.prototype --> null


const team = ['Anthony', 'Saint']

// console.log(team)
// console.log(team.hasOwnProperty('length')) // true
// console.log(team.hasOwnProperty('filter')) // false, it is up the prototype chain one in Array.prototype

/* A new array's literal syntax is [ ] */
/* Can also be created using const team = new Array(['item1', 'item2']) */

/* FUNCTION */

const getScore = () => 1

// console.log(getScore)


/* PRIMITIVES */
const str = 'computer'
// console.log(str) // cannot be expanded
// console.log(str.split('')) // ['c', 'o', 'm', 'p', 'u', 't', 'e', 'r']

const str2 = new String('phone')
// console.log(str2)

/* So when you try to use a method on a primitive property, it converts it into an object behind the scenes */