// Regular functions have an argument property. Regardless of what is named, if the function has 
// more arguments, they are all housed in the arguments variable

// These only exist for regular functions. They don't exist for arrow functions

/*
const add = function(a, b) {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))
*/

/*
const add = () => arguments[0] + arguments[1]  // error. Local function doesn't bind arguments

console.log(add(11, 22, 33, 44))
*/

// Another issue with arrow functions is that they don't bind the THIS value, so they don't work well for methods

const car = {
    color: 'red',
    getSummary: function () {
        return `My car is ${this.color}`
    },
    getSummaryAF: () => `My car is ${this.color}`,
    getSummaryShorthand() {
        return `My car is ${this.color}`
    }
}

console.log(car.getSummary())
console.log(car.getSummaryAF()) // undefined. This is not bound. You are accessinf a function you don't have access to

// There is a non-arrow function way to make a more succinct method
console.log(car.getSummaryShorthand())