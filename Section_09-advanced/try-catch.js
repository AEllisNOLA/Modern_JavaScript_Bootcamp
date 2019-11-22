/* 
You can crash your program if needed and give a useful error message by creating an if/else statement and
adding 'throw Error('error description')
*/

const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

/* 
If the error has nothing to do with the software you want to use try/catch
*/

try {
    // runs if there is no error
    const result = getTip(10)
    console.log(result)
} catch (e) {
    // runs if there is an error. It allows the program to recover and avoids the entire program shutting down
    console.log('Catch block is running')
}


// const result = getTip('test')
// console.log(result)

