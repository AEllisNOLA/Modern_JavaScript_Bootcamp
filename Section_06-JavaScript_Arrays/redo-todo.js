/* 38. Array Basics */

/*
1. Create an array of Todos
2. Console log the length
3. Print first and second-to-last
*/

const todos = ['Study JavaScript', 'Do Waitr shifts', 'Study LSAT', 'Grocery shop', 'Bring Saint to VA']
// console.log(`You have ${todos.length} todos.`)  ==>  You have 4 todos
// console.log(`1 of ${todos.length} todos: ${todos[0]}`)  ==> 1 of 4 todos: Study Javascript
// console.log(`3 of ${todos.length} todos: ${todos[todos.length-2]}`)  =>  3 of 4 todos: Study LSAT

/* 39. Manipulating Arrays with Methods */

/*
1. Delete third item
2. Add new item onto end
3. Remove first item from list
*/

/*
todos.splice(2, 1);
console.log(todos)
todos.push('Pushed note!')
console.log(todos)
todos.shift()
console.log(todos)
*/

/* 40. Looping Over Arrays */
/*
console.log(`You have ${todos.length} total todos:`)
todos.forEach(function(item, index) {
    console.log(`#${index + 1}: ${item}`)
}) 
*/

/* 41. The for loop */
/*
console.log(`You have ${todos.length} todos.`)
for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1} - ${todos[i]}`)
}
*/

/* 42. Searching through Arrays (1 ) - no challenge */

/* 43. Searching through Arrays (2) */

/* 
1. convert to array of strings to array of objects with text and completed with boolean
2. create removeToDo function by text value. If it finds a match, it deletes it. if not, nothing happens
*/


const todosObj = [{ 
    text: 'Study JavaScript',
    completed: true
}, { 
    text: 'Do Waitr shifts',
    completed: false
}, { 
    text: 'Study LSAT',
    completed: false
}, { 
    text: 'Grocery shop',
    completed: true
}, { 
    text: 'Bring Saint to VA',
    completed: false
}]

const deleteTodo = function(arr, text) {
    const todoIndex =  arr.findIndex(function(item, index) {
        return item.text.toLowerCase() === text.toLowerCase()
    })
    if (todoIndex > -1) return arr.splice(todoIndex, 1)   
}
/*
deleteTodo(todosObj, 'Bring saint to va')
console.log(todosObj)

deleteTodo(todosObj, 'drink milk')
console.log(todosObj)
*/

/* 44. Filtering Arrays */

const getUncompletedTodos = function(arr) {
    return arr.filter(function(todo, index) {
        return !todo.completed
    }) 
}
// console.log(getUncompletedTodos(todosObj))

/* 45. Sorting Arrays */

const sortTodos = function(arr) {
    arr.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todosObj)
console.log(todosObj)


const sortNotes = function(arr) {
    arr.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}
    
