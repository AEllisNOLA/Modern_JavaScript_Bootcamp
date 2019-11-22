// You should actively avoid var. Outdated, but not deprecated

var firstName = 'Anthony'

// Similar to let in that it can be reassigned
firstName = 'Anthony Ellis'


// Downfall #1 - var lets you redeclare already created variables.
var firstName = 'Jen' // WORKS! Would not work with const/let and program would crash. 
// This downfall leads to accidentally changing variable values without meaning to

// Downfall #2 - function-scoped, not block-scoped
// things like if statements don't create a new scope 

if (10 === 10) {
    var num = "10 does in fact equal 10"
}

console.log(num)

// const and let would not give access to num because it is inside of the function. 
// var allows using that item in the function. So private calculations meant to stay in the function leak out into the entire program

// only a function creates a new scope, 
setNameToJen = function () {
    var jen = 'Jen';
}
setNameToJen();
// console.log(jen) // won't work! Name jen is not available outside of the function


// Downfall #3 - accessing variables before they are declared

console.log(age)
// var age 
// console.log(age) // undefined - both var and let will give you this
// However, if you try to use that variable BEFORE it is declared, no error message is thrown! 
// Let/Const will throw an error telling you to define it first!
// A var declaration gets hoisted to the top of the scope

var age = 10 // WILL STILL SHOW UNDEFINED!

/* 
This is because the order of operations due to hoisting goes thusly:
    // var age
    // console.log(age)
    // age = 10

*/

age = 10
console.log(age) // SHOWS 10!
var age

/* 
This is because the order of operations due to hoisting goes thusly:
    // var age
    // age = 10
    // console.log(age)
*/