/* Browser/Server connection via HTTP */
// Request - what we want to do? We want to generate random phrase
// Response - What was actually done? The phrase that is given back


/* Grab DOM elements*/
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

const game1 = new Hangman('Car Parts', 3)

/* Display Puzzle/Guesses to browser */
puzzleElement.textContent = game1.puzzle  // change to .puzzle
guessesElement.textContent = game1.statusMessage  // change to .puzzle

// Keydown functionality in browser
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage

})

// Note: You can create the first portion of the promise chain and abstract it in a different file,
// return the value, and call it over here. Then you can chain stuff on.

getPuzzle(3).then((puzzle) => {
    console.log(puzzle)
}).catch(
    (err) => {
        console.log(`Error: ${err}`)
    }
)

/*
getCountry('MX').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(err)
})
*/


// CHALLENGE!
// 1. Create getLocation function with no args and place it in the requests.js file
// 2. Set up geolocation to make a request to the url with token
// 3. Use it in this app.js file to print out city region and country


/*
getLocation().then((location) => {
    console.log(`Location is: ${location.city}, ${location.region} ${location.postal} ${location.country}`)
}).catch((err) => {
    console.log(`Error: ${err}`)
})
*/


// CHALLENGE!
// Chain getLocation and getCountry together. Use getLocation to feed getCountry the country code
getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
})









/* CHALLENGE */
// 1. Make new request for all countries using GET method using url http://restcountries.eu/rest/v2/all
// 2. Parse responseText to get back array of objects
// 3. Find your country object by its country code (alpha2Code)
// 4. Print full country name

// 1. Create a new function for getting country details
// 2. Call it with two args: country code and callback function
// 3. Make the HTTP request and call the callback with country info
// 4. Use the callback to print country name

/*
const requestCountry = new XMLHttpRequest()
const countryCode = 'US'

requestCountry.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((el) => el.alpha2Code === countryCode
        )
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('An error has occurred')
    }
})


requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()
*/


/* FETCH API */
// Used instead of XMLHttpRequest()
// you can add customizations to the request in the second arg
// fetch returns a promise. It does not require a readyState.

/*
fetch(`http://puzzle.mead.io/puzzle`, {}).then((response) => {
    if (response.status === 200) {
        // this returns a promise, not a JS Object. The promise resolves with the the object at some point in the future,
        // so we add a .then() before the catch and pass it the handler
        return response.json()

    } else {
        // throw new error jumps straight to the .catch statement
        throw new Error('Unable to fetch puzzle')
    }

}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})
*/