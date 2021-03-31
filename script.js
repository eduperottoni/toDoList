const taskInput = document.querySelector('#add-area-input')
const addButton = document.querySelector('#add-button')
console.log(addButton)
const main = document.querySelector('main')

function createTaskItem(){
    if (taskInput.value != ''){
        var taskContainer = document.createElement('div')
        taskContainer.classList.add('task')

        var taskDescript = document.createElement('div')
        taskDescript.classList.add('task-descript')

        var taskDescriptP = document.createElement('p')
        taskDescriptP.innerHTML = `${taskInput.value}`

        var taskCommands = document.createElement('div')
        taskCommands.classList.add('task-commands')

        var buttonComCheck = document.createElement('button')
        buttonComCheck.classList.add('task-commands-button')
        buttonComCheck.classList.add('check-item')
        buttonComCheck.innerHTML ='<img src="./images/button-checked-icon.png" alt="Marcar tarefa como concluída">'

        var buttonComEdit = document.createElement('button')
        buttonComEdit.classList.add('task-commands-button')
        buttonComEdit.classList.add('edit-item')
        buttonComEdit.innerHTML ='<img src="./images/button-edit-icon.png" alt="Marcar tarefa como concluída">'

        var buttonComRemove = document.createElement('button')
        buttonComRemove.classList.add('task-commands-button')
        buttonComRemove.classList.add('remove-item')
        buttonComRemove.innerHTML ='<img src="./images/button-trash-icon.png" alt="Marcar tarefa como concluída">'

        
        taskCommands.appendChild(buttonComCheck)
        taskCommands.appendChild(buttonComEdit)
        taskCommands.appendChild(buttonComRemove)
        taskDescript.appendChild(taskDescriptP)
        taskContainer.appendChild(taskDescript)
        taskContainer.appendChild(taskCommands)


        main.appendChild(taskContainer)
    }
    
}

addButton.addEventListener('click', ()=>{
    createTaskItem()
})
