
let container = document.getElementById('box');
let tasknameInput = document.getElementById('taskname');
let addButton = document.getElementById("add");
let searchInput = document.getElementById("search");
let tasksDiv = document.getElementById('tasks');

// Function to get tasks from localStorage
function getTasksFromLocalStorage() {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  } else {
    return ["Task1", "Task2", "Task3"]; // Default tasks if no tasks are stored in localStorage
  }
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial loading of tasks from localStorage
let tasksArray = getTasksFromLocalStorage();

// Function to display tasks in the container
function displayTasks() {
  tasksDiv.innerHTML = ''; // Clear the previous content
  tasksArray.forEach((task, index) => {
    let row = document.createElement("div");
    row.className = "row";

    let taskName = document.createElement("span");
    taskName.textContent = task;
    taskName.style.fontSize = "20px";
    row.appendChild(taskName);

    let del = document.createElement("button");
    del.textContent = "Delete";
    // Add event listener to remove task on click
    del.addEventListener("click", () => {
      tasksArray.splice(index, 1); // Remove task from the array
      saveTasksToLocalStorage(tasksArray); // Save updated tasks to localStorage
      displayTasks(); // Update the displayed tasks
    });
    row.appendChild(del);

    let update = document.createElement("button");
    update.textContent = "Update";
    // Add event listener to update task on click
    update.addEventListener("click", () => {
      let newTaskName = prompt("Enter the new task name:", task);
      if (newTaskName && newTaskName.trim() !== "") {
        tasksArray[index] = newTaskName.trim(); // Update task in the array
        saveTasksToLocalStorage(tasksArray); // Save updated tasks to localStorage
        displayTasks(); // Update the displayed tasks
      }
    });
    row.appendChild(update);

    tasksDiv.appendChild(row);
  });
}

// Initial display of tasks
displayTasks();

// Add event listener to the "Add" button
addButton.addEventListener("click", () => {
  let newTaskName = tasknameInput.value.trim();
  if (newTaskName !== "") {
    tasksArray.push(newTaskName); // Add the new task to the array
    tasknameInput.value = ''; // Clear the input field
    saveTasksToLocalStorage(tasksArray); // Save updated tasks to localStorage
    displayTasks(); // Update the displayed tasks
  }
});

// Add event listener to the search input
searchInput.addEventListener("input", () => {
  let searchTerm = searchInput.value.trim().toLowerCase();
  let filteredTasks = tasksArray.filter(task => task.toLowerCase().includes(searchTerm));
  tasksDiv.innerHTML = ''; // Clear the previous content
  filteredTasks.forEach((task, index) => { // Add the index parameter here
    let row = document.createElement("div");
    row.className = "row";
    let taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = task;
    row.appendChild(taskNameSpan);
    tasksDiv.appendChild(row);
    let update = document.createElement("button");
    update.textContent = "Update";
    let del = document.createElement("button");
    del.textContent = "Delete";
    row.appendChild(update);
    row.appendChild(del);
    del.addEventListener("click", () => {
      let originalIndex = tasksArray.indexOf(task); // Get the original index of the task
      tasksArray.splice(originalIndex, 1); // Remove task from the array
      saveTasksToLocalStorage(tasksArray); // Save updated tasks to localStorage
      displayTasks(); // Update the displayed tasks
    });
    update.addEventListener("click", () => {
      let newTaskName = prompt("Enter the new task name:", task);
      if (newTaskName && newTaskName.trim() !== "") {
        let originalIndex = tasksArray.indexOf(task); // Get the original index of the task
        tasksArray[originalIndex] = newTaskName.trim(); // Update task in the array
        saveTasksToLocalStorage(tasksArray); // Save updated tasks to localStorage
        displayTasks(); // Update the displayed tasks
      }
    });
  
  });
});

 