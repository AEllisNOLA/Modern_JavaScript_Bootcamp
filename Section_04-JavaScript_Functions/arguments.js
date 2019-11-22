// multiple args
let add = function (x, y = 0) {
    return x + y
}

let result = add(5, 2)
console.log(result)

// default args
let getScoreText = function (name = 'anonymous', score = 0) {
    return `${name}: ${score}`
}

let anthonyScore = getScoreText(undefined, 100)
console.log(anthonyScore)

let getTip = function (bill, percentage = 0.2) {
    let tip = bill * percentage;
    let tipPercentage = percentage * 100
    let tipTotal = bill + tip;
    return `
    Bill: $${bill}
    Tip percentage: ${tipPercentage}%
    Tip total: $${tip}
    Total: $${tipTotal}
    `
}

let arbys = getTip(15.21, 0.4);
console.log(arbys) // should be a tad over 6.00

let commandersPalace = getTip(521, 0.3)
console.log(commandersPalace) // should be about 156

let defaultTip = getTip(100)
console.log(defaultTip) // should be 20

let bigTip = getTip(100, .9)
console.log(bigTip) // should be 90