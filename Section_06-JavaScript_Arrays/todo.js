const todos = [
    {
        title: "LSAT",
        body: "Study for LSAT"
    }, {
        title: "Waitr",
        body: "Work 11:30-2:30"
    }, {
        title: "JavaScript",
        body: "Continue with JavaScript course"
    }, {
        title: "React",
        body: "Begin React course"
    }, {
        title: "Fantasy Football",
        body: "Set Fantasy Football lineup"
    }
]


console.log(`You have ${todos.length} items on your to-do list.`)

/*
todos.forEach(function(item, index) {
    console.log(`${index + 1}: ${item}`)
})
*/

/*
for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`)
}
*/

/* 
CHALLENGE
1. Convert array of strings to array of objects with text and completed property
2. make function to remove todo by text value. Remember to make case insensitive. If it finds match, it deletes it, so no return needed.
*/

deleteTodo(todosArr, "buy food")
console.log(todos)