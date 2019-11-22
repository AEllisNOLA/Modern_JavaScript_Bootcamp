// Async functions always returns a promise, which is resolved with the value that you choose to return in the function

const processData = async () => {
    //   throw new Error('Something went wrong')
    return 12
}


const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})

const processData2 = async () => {
    // attach what you are waitin for to a variable and then just use that.
    // no .then, no callbacks, etc
    // Also no chaining! Latter await statements won't run until prior ones complete
    // and await throws error if there is an issue. No throw new Error() on our own

    //    const data = await getDataPromise(5)
    //    console.log(data)

    let data = await getDataPromise(2) // 2 * 2 = 4
    

    data = await getDataPromise(data) // 4 * 2 = 8
    data = await getDataPromise(data) // 4 * 2 = 8

    data = await getDataPromise(data) // 4 * 2 = 8

    return data
}

processData2().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})