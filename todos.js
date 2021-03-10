// selectors

const input = document.querySelector('.input')
const button = document.querySelector('.button')
const taskList = document.querySelector('.list')

//Even Listeners
button.addEventListener('click', newTodo)
taskList.addEventListener('click', deleteTask)

//functions

function newTodo(e){
    e.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    newTodo.innerText = input.value
    newTodo.classList.add('item')
    todoDiv.appendChild(newTodo)
    //Completed button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<li class="fas fa-check"></li>'
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //deleted button
    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = '<li class="fas fa-trash"></li>'
    deleteTask.classList.add('delete-btn');
    todoDiv.appendChild(deleteTask);
    // append List
    taskList.appendChild(todoDiv)
    // clear input value
    input.value = "";

}

function deleteTask(e) {
const item = e.target;
//delete task
    if(item.classList[0] === 'delete-btn')  {
        const task = item.parentElement;
        task.remove();
    }
}


// check complete
if(item.classList[0] === "complete-btn") {
    task.classList.toggle("completed");
}