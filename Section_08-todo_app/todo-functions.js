/* ********** Fetch existing todos from localStorage. If none exist, return empty array ********** */

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

/* ********** Save todos to localStorage ********** */

const saveTodosToLocal = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

/* ********** Render application todos based on filters ********** */

const renderTodos = function () {
    // Filter via user query and by completion status and return those that match
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // Search for todo based on completed status... not yet finished
    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    // Clear out todos before repopulating ********** */
    document.querySelector('#todo-list').innerHTML = ''

    // Create a banner to show how many todos are needed to do
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompletedTodos))


    // Create paragraph for each todo above using text value
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
}

/* ********** Get the DOM elements for an individual note ********** */

const generateTodoDOM = function (todo) {
    const todoElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    // Set up checkbox
    checkboxElement.setAttribute('type', 'checkbox')
    // set checkbox to its current state
    checkboxElement.checked = todo.completed
    todoElement.appendChild(checkboxElement)
    checkboxElement.addEventListener('change', function (e) {
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
    buttonElement.addEventListener('click', function (e) {
        removeTodo(todo.id)
        saveTodosToLocal(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Toggle checkbox completed status
const toggleTodo = function (id) {
    // grab object
    const todo = todos.find(function (todo, index) {
        return todo.id === id
    })
    // make sure object exists. If so, flip value
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
    return todo
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return id === todo.id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}




// wire up button event
// remove todo by id
//save and rerender todos list



/* ********** Get the DOM elements for list summary ********** */

const generateSummaryDOM = function (incompletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos to do!`
    return summary
}