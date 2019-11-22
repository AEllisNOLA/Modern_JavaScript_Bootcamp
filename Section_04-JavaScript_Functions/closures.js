/* 
A closure is the combination of a function with the lexical scope it had when it was defined.
printMessage() still has access to the message variable above it, even after the parent function 
has completed
*/


/* 
Why does this matter? Think about async operations. When we use the callback function, the main function
completes before the callback can be used. The callback is used after completion, but its definition is
remembered.
*/

/*
const myFunction = () => {
  const message = 'This is my message' 
  const printMessage = () => {
      console.log(message)
  }
  return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()
*/

/* Using a closure to have a private variable */
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

/* count cannot be modified except by the methods returned */
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0  // does not do anything!
console.log(counter.get())  // -1


/* 
Currying - transforming a single function that takes a lot of args into many functions that use subsets of 
those args 

non-curried would be like: const add = (a, b) => a + b
*/

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))  // 8
console.log(add10(22))  // 32

const add100 = createAdder(100)
console.log(add100(22))  // 122

// console.log(add(5, 7))

// Challenge: Tipper
// 1. Create createTipper, which takes in base tip (.15 for 15%)
// 2. Set it up to return a function that takes in the bill amount`
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them


const createTipper = (tipPercentage) => {
    return (billAmount) => {
        return billAmount * tipPercentage
    }
}

const createTipper18 = createTipper(.18)
console.log(createTipper18(22))

const createTipper25 = createTipper(.25)
console.log(createTipper25(22))