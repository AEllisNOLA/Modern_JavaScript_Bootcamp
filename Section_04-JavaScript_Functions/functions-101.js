let greetUser = function () {
    console.log('Welcome user!')
}

let squareNumber = function (num) {
    let result = num * num
    return result
}

// let value = squareNumber(6)
// console.log(value)

//convertFahrenheitToCelsius
let convertFtoC = function (F) {
    let C = (F-32) * (5/9)
    return C
}

console.log(convertFtoC(32))
console.log(convertFtoC(68))