class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    // Displays word with asterisks showing instead of unguessed letters
    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    // Allows user to guess letter. Ignores repeats, penalizes wrong guesses and updates status based on guesses
    acceptGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        // If guesses run out (failed) or word has been guessed (finished), don't allow guesses
        if (this.status !== 'playing') {
            return
        }

        // Guess is unique
        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        // Guess is unique and a bad guess
        if (isUnique && isBadGuess) {
            this.guesses--
        }

        this.calculateStatus()
    }

    // When game is over offers congratulations for winner, shows answer for loser
    displayMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `The answer was: "${this.word.join('')}"`
        } else {
            return `Congratulations! You guessed the word!`
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `The answer was: "${this.word.join('')}"`
        } else {
            return `Congratulations! You guessed the word!`
        }
    }
    // Figures out if each letter of the word has been guessed. Updates status of game based on that.
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

}

// Convert "getStatusMessage" to custom getter for "statusMessage"
// Convert "getPuzzle" to a custom getter for "puzzle"
// change usage in app.js