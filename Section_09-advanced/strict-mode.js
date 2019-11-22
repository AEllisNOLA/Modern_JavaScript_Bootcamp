'use strict'
// let data // this makes the code work
const processData = () => {
    data = '12312412' // since data is not found in local or global, JS will create this variable as a global. It is a leaked global
}
processData()
console.log(data)

/*
Strict Mode also allows code to be future-proof. There are items that will be coming to JS but aren't 
here yet, and Strict Mode accounts for that.

It also avoids using deprecated features of the language
*/