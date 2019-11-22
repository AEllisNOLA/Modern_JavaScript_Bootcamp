/* Async can be done using a callback pattern or a promises pattern */


// Callback Pattern
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the callback data')
        // callback('This is the callback error', undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(data)
    }
})

// Promises Pattern (Promise API)
// Promises have a resolve (success) and a reject (fail) arg
// Basic Promise example

/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
//        resolve('This is the promise data')
        reject('This is the promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})
*/
/* To add args/options */
// create a function that returns new promise first and add an arg for your data
const getDataPromise2 = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is the promise resolve with data of: ${data}`)
        //        reject('This is the promise error')
    }, 2000)
})


// then attach it and insert the data you want
const myPromise2 = getDataPromise2(123)

myPromise2.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})




// PROMISE CHAINING
// Callback Pattern chaining - aka Callback Hell
// You would need to create the initial function
const getDataCallbackChain = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided', undefined)
        }
    }, 2000)
}
// Then use the function 
getDataCallbackChain(2, (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        // and if no error the first time around, call it again
        getDataCallbackChain(data, (err, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})

// Using promises the not-great way.

const getPromiseDataChain = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})



// not great pattern due to two error handlers and a ton of nesting

getPromiseDataChain(2).then((data) => {
    getPromiseDataChain(data).then((data) => {
        console.log(`${data} Boo-yah!`)
    }), (err) => {
        console.log(err)
    }
}, (err) => {
    console.log(err)

})

// even better pattern! PROMISE-CHAINING. No nesting, no err, much cleaner, even with even more promises
/*
getPromiseDataChain(10).then((data) => {
    return getPromiseDataChain(data)
}).then((data) => {
    console.log(data)
})
*/
/*
getPromiseDataChain('10').then((data) => {
    return getPromiseDataChain(data)
}).then((data) => {
    return getPromiseDataChain(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
*/

// You do not have to only return promises for the next 'then' method to be called during a promise chain.
// Return whatever you want, and it will be passed along

getPromiseDataChain(10).then((data) => {
    return getPromiseDataChain(data)
}).then((data) => {
    return 'This is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})