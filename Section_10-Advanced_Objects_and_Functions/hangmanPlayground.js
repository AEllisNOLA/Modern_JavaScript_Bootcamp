const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = remainingGuesses
    this.guessedLetters = ['a', 'c']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ')  {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

// 90. CHALLENGE
// 1. Create constructor function
// 2. Set up attributes for the word and number of guesses
// 3. Create two instances and print both to console

const game1 = new Hangman('San Francisco', 3)
const game2 = new Hangman('Rodeo', 2)
// console.log(game1.getPuzzle())

// console.log(game1)
// console.log(game2)

// 92. Challenge
// 1. store word as an array of lowercase letters
// 2. store guessed letters as a property. Starts empty
// 3. Create method that gives an asterisk for every letter not yet guessed