let num = 103.941

// toFixed() method
num.toFixed(2) // 103.94
num.toFixed(9) // 103.941000000

// Math.round() method
Math.round(num) // 104 because decimal is over is 5 or more
Math.round(103.000001) // 103 because decimal is under 5

// Math.floor() method
Math.floor(num) // 103. Forces a round down regardless of decimal

// Math.ceil() method
Math.ceil(num) // 104. Forces a round up regardless of decimal


// Math.random() method
Math.random() // random decimal between .0 and .99999


// Trick to generate number in a specific range
    // 1) Set range
let min = 10
let max = 20

    // 2) Math.random() gives us between 0 and .99999
    // 3) Multiply Math.random() by (max - min). This gives us a range of max - min, so 20 at this point.
    // 4) add 1 to (max-min) to have the floor be 1 instead of 0. Only important if you want to start at 1 and eradicate 0.
    // 5) put that entire formula inside Math.floor() to push it down to a whole number.
    // 6) finally, add the min to elevate entire random range to your required range. so adding 10 bumps 0-20 to 10-30

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// challenge: function takes in a guess as an argument and generates a number within a range to see if their guess was correct.
// guess 1 - 5. return true if correct, false if not

let guessingGame = function (guess) {
    let min = 1
    let max = 5
    let generatedNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`User guess is: ${guess}`)
    console.log(`Answer is: ${generatedNum}`)
    return guess === generatedNum
}

console.log(guessingGame(2))