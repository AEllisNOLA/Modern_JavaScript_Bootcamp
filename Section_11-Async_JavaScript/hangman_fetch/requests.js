const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            // throw error
            throw new Error('Unable to fetch puzzle')
        }
        // data is what is returned from response.json
    }).then((data) => {
        return data.puzzle
    })
}

/* 
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    // Making an HTTP Request 
    const request = new XMLHttpRequest()

    // add Event Listener to get data
    request.addEventListener('readystatechange', (e) => {
        // If the request is finished (4) and everything went well (200)
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // callback function calls undefined for error since this is the working case

            resolve(data.puzzle)
            // If the request is finished (4) but things didn't go well
        } else if (e.target.readyState === 4) {
            // callback function calls undefined for success since this is the error case
            reject('An error has taken place.')
        }
    })
    // Use GET method to connect to URL and retrieve data
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})


*/




/*

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const requestCountry = new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((el) => el.alpha2Code === countryCode
            )
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject(`There was an error!`)
        }
    })

    requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
    requestCountry.send()
})
*/

// CHALLENGE
// 1. Convert getCountry to use fetch and return a promise
// 2. Make sure getCountry still resolves with the country that matches
// 3. Change getCountry to use catch

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country.')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

// Note: Above has a second .then because it has an arg it needs to fulfill its job
// Below does not because no arg
const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=4a2060cd113a78').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to connect to IPInfo')
        }
    })
}