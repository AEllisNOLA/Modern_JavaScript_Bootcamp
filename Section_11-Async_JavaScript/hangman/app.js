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


getPuzzle(5, (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)

    }
})


getCountry('AF', (error, countryCode) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${countryCode.name}`)
    }
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
