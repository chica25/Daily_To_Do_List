
    const newForm = document.querySelector('.add')
    const list = document.querySelector('.task')
    const search = document.querySelector('.search input')

    const createTemplate = (todo) => {
        
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash delete"></i>`;

    list.innerHTML += html
}

    newForm.addEventListener('submit', e => {
        e.preventDefault();
        const todo = newForm.add.value.trim();
        if(todo.length){
            createTemplate(todo)
            newForm.reset();
        }
    });

    // delete tasks
    list.addEventListener('click', e => {
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
        }
    });

    const filterTask = (term) => {
      Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
           .forEach((todo) => todo.classList.add('filtered'));

        Array.from(list.children)
          .filter((todo) => todo.textContent.toLowerCase().includes(term))
             .forEach((todo) => todo.classList.remove('filtered'));
    }  
    
    search.addEventListener('keyup', () => {
        const term = search.value.trim().toLowerCase();
        filterTask(term)
      
    })
    
