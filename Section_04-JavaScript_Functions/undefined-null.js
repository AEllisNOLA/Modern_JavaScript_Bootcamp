let name

if (name === undefined) {
    console.log("There is no name!")
} else {
    console.log(name);
}


let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

/* 
Undefined most commonly occurs if:
1) a variable is created but never assigned a value
2) A function requires input but that input is never given when the function is invoked, so it defaults to undefined
3) a function is expected to return something but it doesn't, it defaults to returning undefined
*/


/* 
While you can explicitly set something to undefined, it is preferred to use null instead
*/

let age = 27
console.log(age)
age = null
console.log(age)