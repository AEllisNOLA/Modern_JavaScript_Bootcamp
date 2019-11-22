const todos = [
    {
        text: 'Go to the gym',
        completed: false
    }, {
        text: 'Do Waitr shift',
        completed: true
    }, {
        text: 'Go to sleep',
        completed: false
    }, {
        text: 'Go to the store',
        completed: true
    }
]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {

    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })


    
    // Search for todo based on text input
/*    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    }) */
    // Widdle down filteredTodos to show or not based on checkbox
//    filteredTodos = filteredTodos.filter(function (todo) {
        // quicker way to do it. Everything is hidden when checked, but then the OR part overrides to always show not completed
        // always keeps incomplete todos regardless of 
 //       return !filters.hideCompleted || !todo.completed
/*
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
*/
 //   })
    // Search for todo based on completed status... not yet finished
    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    // Clear out todos before repopulating
    document.querySelector('#todo-list').innerHTML = ''

    // Create a banner to show how many todos are needed to do
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos to do!`
    document.querySelector('#todo-list').appendChild(summary)

    // create paragraph for each todo above using text value
    filteredTodos.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        // document.querySelector('body').appendChild(p)
        document.querySelector('#todo-list').appendChild(todoElement)
    })




}

// initial rendering
renderTodos(todos, filters)

// then re-render
document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// create a form with single input for todo text (done in index.html)
// setup a submit handler and cancel default action
document.querySelector('#add-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements)
    const newTodo = ({
        text: e.target.elements.addTodo.value,
        completed: false
    })
    // add a new item to the todos array with that text data (completed value of false)
    todos.push(newTodo)
    // Rerender the application
    renderTodos(todos, filters)
    // clear input field
    e.target.elements.addTodo.value = ''
})


// 1 create a checbox and set up event listener to read "hide completed"
// 2 create hideCompleted filter that defaults to false
// 3 update hideCompleted on rerender list on checkbox change
// 4 Setup renderTodos to remove completed item

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    console.log(`Hide Completed: ${e.target.checked}`)
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})



// 1. Set up HTML Doc with 1 <h1> and 5 <p> filled with tasks

// 1. Hook up JS to HTML
// 2. iterate over all paragraphs and remove all things with the word 'the' 


/*
const p = document.querySelectorAll('p')


p.forEach(function(item, index) {
    if(item.textContent.includes('the')) {
        item.remove()
    }
})
*/

/* 52. Adding Elements to Dom  */

// Create paragraph tag with "you have _ todos left to do"



/*
// Listen for new todo creation

document.querySelector('#add-button').addEventListener('click', function (e) {
    console.log('add button clicked!')
})
*/
/*
// Listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})
*/
/*
Challenge:
1 - Set up div to contain to-dos
2 - Set up filter (searchText) and wire up a new filter input to change it
3 - craete renderTodos function to render and rerender latest filter data
*/

