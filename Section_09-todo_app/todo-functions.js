'use strict'

/* ********** Fetch existing todos from localStorage. If none exist, return empty array ********** */

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
    
}

/* ********** Save todos to localStorage ********** */

const saveTodosToLocal = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

/* ********** Render application todos based on filters ********** */

// I think I accidentally deleted the todos and filters from this so I re-added them. If anything acts weird, this may be where the issue is so try deleting both args
const renderTodos = (todos, filters) => {
    // Filter via user query and by completion status and return those that match
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // Search for todo based on completed status... not yet finished
    const incompletedTodos = filteredTodos.filter((todo) => !todo.completed)

    // Clear out todos before repopulating ********** */
    document.querySelector('#todo-list').innerHTML = ''

    // Create a banner to show how many todos are needed to do
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompletedTodos))


    // Create paragraph for each todo above using text value
    filteredTodos.forEach((todo) => {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
}

/* ********** Get the DOM elements for an individual note ********** */

const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    // Set up checkbox
    checkboxElement.setAttribute('type', 'checkbox')
    // set checkbox to its current state
    checkboxElement.checked = todo.completed
    todoElement.appendChild(checkboxElement)
    checkboxElement.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodosToLocal(todos)
        renderTodos(todos, filters)
    })

    // Set up text element
    textElement.textContent = todo.text
    todoElement.appendChild(textElement)

    // Set up remove button
    buttonElement.textContent = 'Remove'
    todoElement.appendChild(buttonElement)
    buttonElement.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodosToLocal(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Toggle checkbox completed status
const toggleTodo = (id) => {
    // grab object
    const todo = todos.find((todo, index) => todo.id === id)
    // make sure object exists. If so, flip value
    if (todo) {
        todo.completed = !todo.completed
    }
    return todo
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => id === todo.id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}




// wire up button event
// remove todo by id
//save and rerender todos list



/* ********** Get the DOM elements for list summary ********** */

const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos to do!`
    return summary
}