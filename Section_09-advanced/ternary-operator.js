const myAge = 17
// let message

/*
if (myAge >= 18) {
    message = 'You can vote!'
} else {
    message = 'Sorry! You cannot vote yet.'
}
*/

// Ternary Operator works for times when you have 1 of 2 outcomes.
const message = myAge >= 18 ? "You are old enough to vote" : "Sorry, you cannot vote yet"

console.log(message)

// Also works with function

/*
const age = 16

const showPage = () => {
    console.log('Showing page')
}

const showErrorPage = () => {
    console.log('Showing the error page')
}

age >= 21 ? showPage() : showErrorPage()
*/


// or to return attach a variable to the ternary operator
const age = 16

const showPage = () => {
    return 'Showing page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const userOldEnough = age >= 21 ? showPage() : showErrorPage()

console.log(userOldEnough)


// Challenge!
/* 
print team size: _ if less than or equal to 4 
else print team too big
*/

const team = ['Anthony', 'Rosa', 'Saint', 'Ashley', 'Rosa']

// as variable
// const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : `Sorry, your team of ${team.length} is too big. Cut to at most 4 team members.`

// or straight in console.log
//console.log(team.length <= 4 ? `Team size: ${team.length}` : `Sorry, your team of ${team.length} is too big. Cut to at most 4 team members.`)