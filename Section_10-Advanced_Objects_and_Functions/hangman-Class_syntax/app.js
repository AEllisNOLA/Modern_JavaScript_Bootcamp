/* Grab DOM elements*/
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

const game1 = new Hangman('Car Parts', 3)

/* Display Puzzle/Guesses to browser */
puzzleElement.textContent = game1.puzzle  // change to .puzzle
guessesElement.textContent = game1.statusMessage  // change to .puzzle
console.log(game1.status)

// Keydown functionality in browser
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage

})

