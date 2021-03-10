

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

    const createTemplate = (todo) => {
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
        <i class="fas fa-minus-circle""></i>`;

    task.innerHTML += html
}

    newForm.addEventListener('submit', e => {
        e.preventDefault();
        const todo = newForm.add.value.trim();
        console.log(todo)
    })