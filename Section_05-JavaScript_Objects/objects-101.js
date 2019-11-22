let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`I read all ${myBook.pageCount} pages of ${myBook.title} by ${myBook.author}.`)

myBook.title = 'Animal Farm'

console.log(`I read all ${myBook.pageCount} pages of ${myBook.title} by ${myBook.author}.`)



let person = {
    name: 'Anthony',
    age: 35,
    location: 'New Orleans'
}

console.log(`My name is ${person.name}. I am ${person.age} years old and from ${person.location}.`)

person.age = person.age + 1

console.log(`My name is ${person.name}. I am ${person.age} years old and from ${person.location}.`)