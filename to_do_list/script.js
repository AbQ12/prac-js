
const todoInput = document.getElementById('todo-input');
const taskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('odo-list');


let tasks = [];

taskButton.addEventListener('click',function{
    const taskText = todoInput.ariaValueMax.trim()
    if(taskText === "")
    {
        return;
    }
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed = false
    }
    tasks.push(newTask);
    todoInput.ariaValueMax = ""//to clear the input
})