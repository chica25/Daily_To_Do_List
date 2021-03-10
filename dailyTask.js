

// music code
// const song = document.getElementById("song")
// const icon = document.getElementById("icon")

// icon.onClick = function() {
//     if(song.paused){
//         song.play();
//         icon.src = "images/pause_button.png"
//     } else {
//         song.play();
//         icon.src = "images/play_button.png"
//     }

// }
    const newForm = document.querySelector('.add')
    const task = document.querySelector('.task')

    const createTemplate = (todoTask) => {
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todoTask}</span>
        <i class="fas fa-trash"></i>`;

    task.innerHTML += html
}

    newForm.addEventListener('submit', e => {
        e.preventDefault();
        const todoTask = newForm.add.value.trim();
        // console.log(todo)
        if(todoTask.length){
            createTemplate(todoTask)
            newForm.reset();
        }
        // createTemplate(todo)
    });

    // delete tasks
    task.addEventListener('click', e => {
        if(e.target.classList.contains('delete'))
            e.target.parentElement.remove();
    })