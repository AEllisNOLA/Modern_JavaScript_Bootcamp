// Grab DOM elements
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

// Start/Reset Game
let game1

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

// Display Puzzle/Guesses to browser
const render = () => {
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
}

// Keydown functionality in browser
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptGuess(guess)
    render()
})

// Reset game button functionality
document.querySelector('#reset').addEventListener('click', startGame)

// Start game on load
startGame()
