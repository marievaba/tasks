const form = document.querySelector('form')
form.addEventListener('submit', addTask)

const taskList = document.querySelector('ul')
taskList.addEventListener('click', delTask)

const deleteBtn = document.querySelector('#delete-tasks')
deleteBtn.addEventListener('click', delTasks)

function delTasks(){
    // taskList.innerHTML = ''
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

function delTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you really want to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}

function addTask(event){
    const task = document.querySelector('#task').value
    const taskList = document.querySelector('ul');
    const li = document.createElement('li')
    li.className = 'collection-item'
    const text = document.createTextNode(task)
    li.appendChild(text)
    const link = document.createElement( 'a')
    link.className = 'secondary-content'
    link.appendChild(document.createTextNode('X'))
    link.setAttribute('href', '#')
    li.appendChild(link)
    taskList.appendChild(li)
    taskStorage(task)
    document.querySelector('#task').value = ''
    event.preventDefault()
}
function taskStorage(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}