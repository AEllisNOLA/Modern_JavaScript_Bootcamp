/* 
Type Coersion: Can coerce to string, number or boolean
Boolean is okay to do, but string and number should be avoided
*/

console.log('5' + 5) // 55 - acts as a string
console.log('5' - 5) // 0 - acts as a number

/* 
Stick to using === (strict equality). == (loose equality) will return true due to coersion and shouldn't be used.
*/
console.log('5' === '5') // true
console.log(5 === 5) // true
console.log(5 == '5') // true

/* typeof can be used to check the type of a variable before using it */
let type = typeof 123  // number

type = typeof ['1', 'a'] // object

type = typeof {name: 'Anthony', eyes: 'green'} // object


const value = true + 12 // number because true is converted to a 1
const typeValue = typeof value
console.log(typeValue)
