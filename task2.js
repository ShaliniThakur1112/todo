function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task.');
        return;
    }

    var taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>
            <button id="complete" onclick="markComplete(this)"></button>
            <button id="edit" onclick="editTask(this)"></button>
            <button id="dlt" onclick="deleteTask(this)"></button>
        </span>
    `;

    document.getElementById('pending-list').appendChild(taskItem);
    taskInput.value = '';
}

function markComplete(button) {
    var taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
    document.getElementById('completed-list').appendChild(taskItem);
}

function editTask(button) {
    var taskItem = button.parentElement.parentElement;
    var taskText = taskItem.querySelector('span:first-child');
    var newText = prompt('Edit task:', taskText.innerText);

    if (newText !== null) {
        taskText.innerText = newText;
    }
}

function deleteTask(button) {
    var taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
