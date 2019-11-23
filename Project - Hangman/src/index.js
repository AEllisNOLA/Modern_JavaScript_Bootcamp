import Hangman from './hangman'
import getPuzzle from './requests'

/* Grab DOM elements*/
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

/* Initiate game */
let game1


/* Keydown functionality in browser */
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptGuess(guess)
    render()

})

/* Render game */
const render = () => {
    puzzleElement.innerHTML = ''

    guessesElement.textContent = game1.statusMessage
    
    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

/* Start/reset game functionality */
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

