// selectors

const input = document.querySelector('.input')
const button = document.querySelector('.button')
const taskList = document.querySelector('.list')

//Even Listeners
button.addEventListener('click', newTodo)

//functions

function newTodo(e){
    e.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    newTodo.innerText = 'hey'
    newTodo.classList.add('item')
    todoDiv.appendChild(newTodo)
    //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></li>'
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //deleted button
    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = '<li class="fas fa-trash"></li>'
    deleteTask.classList.add('completed-btn');
    todoDiv.appendChild(deleteTask);
    // append List
    taskList.appendChild(todoDiv)

}