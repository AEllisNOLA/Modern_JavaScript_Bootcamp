// Global - (varOne) - access to: varOne
    // Local 1 - (varTwo) - access to: varTwo, varOne
        // Hyper-Local - (varFour) - access to: varFour, varTwo, varOne
    // Local 2 (varFour) - access to: varFour, varOne

let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)
    

    if (true) {
        let varFour = "varFour"
    }
}

if (true) {
    let varThree = "varThree"
}

console.log(varTwo)