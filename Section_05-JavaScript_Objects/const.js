/*
let isRaining = true
console.log(isRaining) // true
isRaining = false
console.log(isRaining) // false
*/

const isRaining = true
console.log(isRaining) // true 
// isRaining = false
console.log(isRaining) // error: can not change a constant variable



// const only applies to reassignments. You can still manipulate or give new values.
const person = {
    age: 12
}

// person = {} // this will fail
person.age = 13; // works fine because you are reaching into the object and manipulating data, not reassigning it

console.log(person)