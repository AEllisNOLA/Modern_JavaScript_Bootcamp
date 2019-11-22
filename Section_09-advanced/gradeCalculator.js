let gradeCalculator = function (studentScore = 0, possibleScore = 100) { // can switch to const because never reassigned

    if (typeof studentScore === 'number' && typeof possibleScore === 'number') {
        let percentScore = (studentScore / possibleScore) * 100; // can switch to const because never reassigned
        let letterGrade; // gets changed so should stay let
        if (percentScore > 100) {
            letterGrade = 'A+++'
            return `Holy Moly! ${letterGrade} / ${percentScore}! Looks like you've been doing extra credit, though you really don't need to!`
        } else if (percentScore === 100) {
            letterGrade = 'A++';
            return `You got an ${letterGrade}/ ${percentScore}%! Woohoo! PURR-FECT!`
        } else if (percentScore >= 90 && percentScore < 100) {
            letterGrade = 'A'
            return `You got an ${letterGrade} / ${percentScore}%! You got an A! Purrr-dy good!`
        } else if (percentScore >= 75 && percentScore < 90) {
            letterGrade = 'S'
            return `You got a ${letterGrade} / ${percentScore}%. You passed, but you can probably do better.`
        } else if (percentScore === 0) {
            return `It looks like you're either really stupid or you never took the test. Were you absent that day?`
        } else {
            letterGrade = 'F'
            return `You got an ${letterGrade} with a ${percentScore}% score. Not good enough! Schedule a retake at the office.`
        }

    } else {
        throw Error('Arguments must be numbers')
    }
}



/* You can also restructure the above code to check for bad information first and then run the code */

/*
let gradeCalculator = function (studentScore = 0, possibleScore = 100) { // can switch to const because never reassigned

    if (typeof studentScore !== 'number' || typeof possibleScore !== 'number') {
        throw Error('Arguments must be numbers')

    } else {
        let percentScore = (studentScore / possibleScore) * 100; // can switch to const because never reassigned
        let letterGrade; // gets changed so should stay let
        if (percentScore > 100) {
            letterGrade = 'A+++'
            return `Holy Moly! ${letterGrade} / ${percentScore}! Looks like you've been doing extra credit, though you really don't need to!`
        } else if (percentScore === 100) {
            letterGrade = 'A++';
            return `You got an ${letterGrade}/ ${percentScore}%! Woohoo! PURR-FECT!`
        } else if (percentScore >= 90 && percentScore < 100) {
            letterGrade = 'A'
            return `You got an ${letterGrade} / ${percentScore}%! You got an A! Purrr-dy good!`
        } else if (percentScore >= 75 && percentScore < 90) {
            letterGrade = 'S'
            return `You got a ${letterGrade} / ${percentScore}%. You passed, but you can probably do better.`
        } else if (percentScore === 0) {
            return `It looks like you're either really stupid or you never took the test. Were you absent that day?`
        } else {
            letterGrade = 'F'
            return `You got an ${letterGrade} with a ${percentScore}% score. Not good enough! Schedule a retake at the office.`
        }

    }
}

*/


try {
    const grade = gradeCalculator(98, 100)
    console.log(grade)
} catch (err) {
    console.log(err.message)
}