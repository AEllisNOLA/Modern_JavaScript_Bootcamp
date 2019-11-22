/* Grab DOM elements*/
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

/* Display Puzzle/Guesses to browser */
puzzleElement.textContent = game1.getPuzzle()
guessesElement.textContent = game1.displayMessage()
console.log(game1.status)

// Keydown functionality in browser
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptGuess(guess)
    console.log(game1.status)
    puzzleElement.textContent = game1.getPuzzle()
    guessesElement.textContent = game1.displayMessage()

})

