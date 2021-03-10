

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
    const list = document.querySelector('.task')
    const search = document.querySelector('.search input')

    const createTemplate = (todoTask) => {
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoTask}</span>
            <i class="fas fa-trash delete></i>`;

    tasks.innerHTML += html
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
    list.addEventListener('click', e => {
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
        }
    });

    const filterTask = (term) => {
      Array.from(list.children)
        .filter((task) => {
            return !task.textContent.includes(term);
           .forEach(() => {
               task.classList.add('filtered');
           })
        })
    }
    
    search.addEventListener('keyup', () => {
        const term = search.value.trim();
        filterTask(term)
    })
    
    