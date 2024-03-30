document.addEventListener('DOMContentLoaded', function() {
        const ToDoInput = document.getElementById('ToDoInput');
        const ToDoList = document.getElementById('ToDoList');
    
        function createTaskElement(taskText) {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" class="done">
                <span class="task-content">${taskText}</span>
                <button class="delete-btn">❌</button> <!-- X symbol -->
            `;
            return taskItem;
        }
    
        function addTask() {
            const taskText = ToDoInput.value.trim();
            if (taskText !== '') {
                const taskItem = createTaskElement(taskText);
                ToDoList.appendChild(taskItem);
                ToDoInput.value = '';
            } else {
                alert('Please enter a ToDo!');
            }
        }
    
        ToDoInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    
        ToDoList.addEventListener('click', function(event) {
            const target = event.target;
            if (target.matches('.delete-btn')) {
                target.parentElement.remove();
            }
        });
    });



















    
// let tasks = [];

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();
//   if (taskText === "") return;
//   const task = {
//     id: Date.now(),
//     text: taskText,
//     completed: false,
//     timestamp: new Date().toLocaleString()
//   };
//   tasks.push(task);
//   displayTasks();
//   taskInput.value = "";
// }

// function displayTasks() {
//   const pendingTasksDiv = document.getElementById("pendingTasks");
//   const completedTasksDiv = document.getElementById("completedTasks");
//   pendingTasksDiv.innerHTML = "";
//   completedTasksDiv.innerHTML = "";

//   tasks.forEach(task => {
//     const taskDiv = document.createElement("div");
//     taskDiv.classList.add("task");
//     taskDiv.innerHTML = `
//       <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})">
//       <span>${task.text}</span>
//       <span>${task.timestamp}</span>
//       <button onclick="deleteTask(${task.id})">Delete</button>
//     `;
//     if (task.completed) {
//       completedTasksDiv.appendChild(taskDiv);
//     } else {
//       pendingTasksDiv.appendChild(taskDiv);
//     }
//   });
// }

// function toggleTask(id) {
//   const task = tasks.find(task => task.id === id);
//   task.completed = !task.completed;
//   displayTasks();
// }

// function deleteTask(id) {
//   tasks = tasks.filter(task => task.id !== id);
//   displayTasks();
// }

// displayTasks();