let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: "A People's History of the United States",
    author: 'Howard Zinn',
    pageCount: 723
}


let getBookInfo = function (book) {
    return {
        summary: `${book.title} - ${book.author}`,
        pageCountSummary: `${book.title} by ${book.author} is ${book.pageCount} pages.`
    }
}

let myBookSummary = getBookInfo(myBook)
let otherBookSummary = getBookInfo(otherBook)

console.log(myBookSummary.pageCountSummary)
console.log(otherBookSummary)

let getTemps = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let oneHundred = getTemps(100);
console.log(oneHundred);
