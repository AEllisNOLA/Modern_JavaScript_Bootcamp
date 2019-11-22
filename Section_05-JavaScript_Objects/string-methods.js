let name = 'Anthony Ellis'

// Length property
name.length // 13

// toUpperCase() method
name.toUpperCase() // ANTHONY ELLIS

// toLowerCase() method
name.toLowerCase() // anthony ellis

// includes() method
let password = 'abc123password098'
console.log(password.includes('password')) // true

// trim() method 
let toTrim = '   No spaces at ends!        '
console.log(toTrim)
console.log(toTrim.trim())

// isValidPassword - length more than 8, doesn't contain 'password'

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abc123'))
console.log(isValidPassword('asdafskdgjapassword'))
console.log(isValidPassword('pawor123afk'))