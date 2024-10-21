// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskValue} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("todoList").appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
}

// Function to remove a task
function removeTask(button) {
    let listItem = button.parentElement;
    listItem.remove();
}
