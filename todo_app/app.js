document.addEventListener('DOMContentLoaded', () =>{
const input = document.querySelector('#text')
const add = document.querySelector('.add')
const todoList = document.querySelector('.todo-list')

let tasks = JSON.parse(localStorage.getItem('todo')) || [];

tasks.forEach(task => renderTask(task))

add.addEventListener('click', () => {
    const taskText = input.value.trim()
    if(taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    }

    tasks.push(newTask)
    input.value = ""
    saveTask()
    renderTask(newTask)

})

function renderTask (task) {
    let li = document.createElement('li')
    li.setAttribute("data-id", task.id)
    li.innerHTML = `
    <span>${task.text}</span>
    <button class ="delete">Delete</button>
    `
    
    li.addEventListener('click', (e) => {
        if(e.target.className === "delete") return;
        task.completed = !task.completed;
        li.classList.toggle("completed")
        saveTask()
    })

    li.querySelector('.delete').addEventListener( 'click', (e) => {
        e.stopPropagation()
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove()
        saveTask()
    })

    todoList.appendChild(li)
}

function saveTask () {
   return localStorage.setItem('todo', JSON.stringify(tasks))
}

})