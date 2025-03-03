const input = document.querySelector('#text')
const add = document.querySelector('.add')
const list = document.querySelector('.todo-list')

// console.log(list); 

add.addEventListener('click', (e) => {
    const inputValue = input.value;
    
    if (inputValue) {
        createElement(inputValue) 
        input.value = '';
        input.classList.remove("red-placeholder")
        input.placeholder = "Add a New Task!"
        // setLocalStorage()
    } else {
        input.placeholder = "Type a Task !!!"
        input.className = "red-placeholder"
    }
    
    
    e.preventDefault()
})

function setLocalStorage(task){
    let arr = []
    arr.push(createElement(task))
   localStorage.setItem('todoList', JSON.stringify(arr))
   console.log(arr);
   
}
function getLocalStorage(){

}

function createElement(inputValue) {
    let li = document.createElement('li')
    li.innerHTML = inputValue;
    let button = document.createElement('button')
    button.className = 'delete'
    button.innerHTML = 'Delete'
    li.appendChild(button)
    list.appendChild(li)
    button.addEventListener('click', () => {
        button.parentElement.remove()
        
    })

}



