const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    li.innerHTML = `
        <div class="todo-left">
            <input type="checkbox" class="mark-done">
            <span class="todo-text">${taskText}</span>
        </div>
        <button class="delete-btn">&#128465;</button>
    `;

    todoList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

// Mark as Done or Delete 
todoList.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('mark-done')) {
        const task = e.target.closest('.todo-item');
        const taskText = task.querySelector('.todo-text');
        
        if (e.target.checked) {
            taskText.classList.add('done');
        } else {
            taskText.classList.remove('done');
        }
    } 

    else if (e.target.classList.contains('delete-btn')) {
        const task = e.target.closest('.todo-item');
        todoList.removeChild(task);
    }
});