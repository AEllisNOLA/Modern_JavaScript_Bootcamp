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
    const text = e.target.elements.addTodo.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodosToLocal(todos)
        renderTodos(todos, filters)
        e.target.elements.addTodo.value = ''
    }

})

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
