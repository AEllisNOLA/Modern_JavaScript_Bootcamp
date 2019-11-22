// this is a constuctor function
// Constructor function names should be capitalized. Not a language thing, just convention 
const Person = function(firstName, lastName, age, likes) { // not an arrow function because this isn't allowed with arrow functions
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}


// prototypal inheritance - this lets all instances of Person use the method
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    // Below uses an arrow function but also the 'this' value. That is because it adopts its parent's 'this'
    // if this became a regular function it would break. The firstName would be undefined in the inner function
    // because there would be no 'this' binding in on the inner function from the parent.
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

// const me = person()  // undefined
const me = new Person('Anthony', 'Ellis', 35, ['Coding', 'Sports']) // person {}

me.setName('Kelis Ellis')
console.log(me.getBio()) // prints object of person with Kelis as first name

// new keyword generated new empty object for instance and gives access in the constructor function via 'this' value
// it also returns automatically from the constructor function

// console.log(me)

// an object made via new is just a regular object and can be manipulated in all the same ways
me.firstName = 'Saint'
// console.log(me)
// console.log(me.getBio())  // Saint is 35


const person2 = new Person('Rosa', 'Ellis', 6)
// console.log(person2)

// Any change made to the prototype will be reflected in every single instance
/*
Person.prototype.getBio = function() {
    return 'Testing!'
}
*/
// console.log(person2.getBio()) // Rosa is 6
// console.log(me.getBio()) // Rosa is 6

/* 
A change made to a function on an instance will be reflected only for that instance. Not on other instances.
*/