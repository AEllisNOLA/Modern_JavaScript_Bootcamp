const squareLong = (num) => {
    return num * num
}

console.log(squareLong(4))

// Give arrow function shorthand syntax
// used for simple one-line functions that just return something
// great for cb functions in array methods
// note the curly braces and return statement are deleted

const squareShort = (num) => num * num
console.log(squareShort(5))

const people = [{ name: 'Anthony', age: 35 }, { name: 'Saint', age: 10 }, { name: 'Emmitt', age: 22 }, { name: 'Mike', age: 36 }]

/*
const under30 = people.filter(function(person) {
    return person.age < 30
})
*/

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

//
// 1. find person with age = 22

// const find22 = people.find((person) => person.age === 22)

/*
const find22 = function () {
    return people.find(function (person) {
        return person.age === 22
    })
}
*/
/*
const find22 = () => {
    return people.find(function(person) {
        return person.age === 22
    })
}
*/
/*
const find22 = () => {
    return people.find((person) => person.age === 22)
}
*/

// const find22 = () => people.find((person) => person.age === 22)
// console.log(find22(people))

const find22 = people.find((person) => person.age === 22)
console.log(find22.name)