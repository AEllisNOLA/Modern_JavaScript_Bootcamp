// Global Scope (convertFtoC)
    // Local Scope (F, C)
        // Hyper-Local Scope (isFreezing)

let convertFtoC = function (F) {
    let C = (F-32) * (5/9)

    if (C <= 0) {
        let isFreezing = true;
    }
    return C
}

console.log(convertFtoC(32))
console.log(convertFtoC(68))
// console.log(isFreezing) // won't work