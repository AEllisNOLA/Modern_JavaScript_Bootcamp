'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

// initial rendering
renderTodos(todos, filters)

// then re-render for search
document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Create new to-do
document.querySelector('#add-form').addEventListener('submit', (e) => {
    e.preventDefault()

    todos.push({
        id: uuidv4(),
        text: e.target.elements.addTodo.value,
        completed: false
    })
    saveTodosToLocal(todos)
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
