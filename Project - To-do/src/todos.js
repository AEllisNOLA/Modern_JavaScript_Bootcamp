import uuidv4 from 'uuid/v4'
// Setup the empty todos array

let todos = []

// loadTodos
// Arguments: none
// Return value: none

// Retrieve data saved to local storage. If data exists, parse data. If no data, return empty array for new data.
// formerly getSavedTodos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}


// saveTodos
// Arguments: none
// Return value: none

/* ********** Save todos to localStorage ********** */

const saveTodosToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none


const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodosToLocal()
}




// removeTodo
// Arguments: id of todo to remove
// Return value: none

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodosToLocal()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Toggle checkbox completed status
const toggleTodo = (id) => {
    // grab object
    const todo = todos.find((todo) => todo.id === id)
    // make sure object exists. If so, flip value
    if (todo) {
        todo.completed = !todo.completed
        saveTodosToLocal()
    }
}

// Make sure to call loadTodos and setup the exports

loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }