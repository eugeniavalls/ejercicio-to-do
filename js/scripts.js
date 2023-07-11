const textTask = document.getElementById('text-task');

const containerTask = document.getElementById('container-task');

const checkbox = document.getElementById('checkbox');

const task = document.getElementById('task');

const buttonClose = document.getElementById('button-close');

const tasks = document.getElementById('tasks');

textTask.addEventListener('keyup', event =>{
    tasks.textContent = '';
    const newTextTask = document.createElement('span')

    newTextTask.textContent = event.target.value
    tasks.classList.add('container-task')
       
    tasks.append(checkbox)
    tasks.append(newTextTask)
    tasks.append(buttonClose)

})

buttonClose.addEventListener('click', ()=>{
    tasks.remove()
})




