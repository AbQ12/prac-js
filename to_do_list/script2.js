
const todoInput = document.getElementById("todo-input");
const taskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

taskButton.addEventListener('click',function(){
    const taskText = todoInput.value.trim();
    if(taskText === "")
    {
        alert("the field is empty");
        return;
    }
    const newTask = {
        id: Math.random(),
        text: taskText,
        completed : false
    }
    tasks.push(newTask);
    saveTasks();


})

function renderTask(){
    const li = document.createElement('li');
    li.setAttribute('data-id', taskid);

    
}

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}