document.addEventListener('DOMContentLoaded',() => {
   
const todoInput = document.getElementById('todo-input');
const taskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => renderTask(task));

taskButton.addEventListener('click',function(){
    const taskText = todoInput.value.trim()
    if(taskText === "")
    {
        return;
    }
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed : false
    }
    tasks.push(newTask);   /* [{
        id: 7436257,
        text: umair,
        completed : false
    },{
        id:53635,
        text: abu bakar,
        completed : false
    }] */
    saveTasks();
    todoInput.value = "";//to clear the input
    console.log(tasks);
    
});

function renderTask(task){
    console.log(task.text);
    const li = document.createElement('li')
    li.setAttribute('data-id',task.id)
    if(task.completed) li.classList.add('completed')
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</delete>`;
    li.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON') return;
        task.completed = !task.completed;
        li.classList.toggle('completed');
        saveTasks();
    })

    todoList.appendChild(li);
    
}

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
})

