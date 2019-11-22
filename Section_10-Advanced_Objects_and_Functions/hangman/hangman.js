const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
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


Hangman.prototype.acceptGuess = function (guess) {
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

Hangman.prototype.displayMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.guesses}`
    } else if (this.status === 'failed') {
        return `The answer was: "${this.word.join('')}"`
    } else {
        return `Congratulations! You guessed the word!`
    }

}

Hangman.prototype.calculateStatus = function () {
    /* USING EVERY METHOD */
    // Returns true if every array item matches the comparison
    // .. . // for every letter in word
    // see if that letter is also in the guessed letters array
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }

    /*
    USING FILTER METHOD
    
    // filter out letters that have been guessed, leaving letters that have not been guessed
    // if any letters are left, then puzzle is not finished
    
    const lettersNotGuessed = this.word.filter((letter) => {
        // Want to return letters that have not been guessed
        return !this.guessedLetters.includes(letter)
    })
    const finished = lettersNotGuessed === 0

    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
*/

    /* USING FOREACH METHOD 

    let finished = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            // if a letter in the answer has also been guessed, rock on!
            // but don't set to false. Only set false when a letter has not been guessed
        } else {
            // if a letter in the answer has not been guessed, fail.
            finished = false
        }
    })

    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
    */
}


