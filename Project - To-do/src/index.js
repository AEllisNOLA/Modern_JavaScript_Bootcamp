import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// search text handler
document.querySelector('#search-todo').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// checkbox handler
document.querySelector("#hide-completed").addEventListener("change", (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// form submission handler

document.querySelector('#add-form').addEventListener('submit', (e) => {
    const text = e.target.elements.addTodo.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.addTodo.value = ''
    }
})

// watcher for local storage to update across tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})