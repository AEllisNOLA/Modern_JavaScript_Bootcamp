import {getTodos, toggleTodo, removeTodo} from './todos'
import {getFilters} from './filters'

// renderTodos
// Arguments: none
// Return value: none

/* ********** Render application todos based on filters ********** */

// I think I accidentally deleted the todos and filters from this so I re-added them. If anything acts weird, this may be where the issue is so try deleting both args
const renderTodos = () => {
    const filters = getFilters()

    const todoElement = document.querySelector('#todo-list')

    // Filter via user query and by completion status and return those that match
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // Search for todo based on completed status... not yet finished
    const incompletedTodos = filteredTodos.filter((todo) => !todo.completed)

    // Clear out todos before repopulating ********** */
    todoElement.innerHTML = ''

    // Create a banner to show how many todos are needed to do
    todoElement.appendChild(generateSummaryDOM(incompletedTodos))

    if (filteredTodos.length > 0) {
        // Create paragraph for each todo above using text value
        filteredTodos.forEach((todo) => {
            todoElement.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageElement = document.createElement('p')
        messageElement.classList.add('empty-message')
        messageElement.textContent = 'No todos to show!'
        todoElement.appendChild(messageElement)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element


const generateTodoDOM = (todo) => {
    // Making this a label allows you to click anywhere in line to trigger the checkbox, not solely the checkbox
    const todoElement = document.createElement('label')
    const containerElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    // Set up checkbox
    checkboxElement.setAttribute('type', 'checkbox')
    // set checkbox to its current state
    checkboxElement.checked = todo.completed
    containerElement.appendChild(checkboxElement)
    checkboxElement.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Set up text element
    textElement.textContent = todo.text
    containerElement.appendChild(textElement)

    // Setup Container
    todoElement.classList.add('list-item')
    containerElement.classList.add('list-item__container')
    todoElement.appendChild(containerElement)

    // Set up remove button
    buttonElement.textContent = 'Remove'
    buttonElement.classList.add('button', 'button--text')
    todoElement.appendChild(buttonElement)
    buttonElement.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoElement
}



// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element


const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    const plural = incompletedTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} to do!`

    /*
    if (incompletedTodos.length === 1) {
        summary.textContent = `You have ${incompletedTodos.length} todo to do!`
    }

    if (incompletedTodos.length > 1) {
        summary.textContent = `You have ${incompletedTodos.length} todos to do!`
    }
    */


    return summary
}

// Make sure to set up the exports

export {renderTodos, generateTodoDOM, generateSummaryDOM}