// DOM Elements
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add Task Functionality
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText !== "") {
        createTask(taskText, priority);
        taskInput.value = ""; // Clear input field after adding
        prioritySelect.value = "low"; // Reset priority to default
    } else {
        alert("Please enter a task!");
    }
});

// Create Task Element
function createTask(text, priority) {
    const taskItem = document.createElement("li");
    
    // Add priority-specific class
    taskItem.classList.add(`${priority}-priority`);

    // Task content with delete button
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete-button">Delete</button>
    `;

   // Add to the task list
   taskList.appendChild(taskItem);

   // Mark as completed on click
   taskItem.addEventListener("click", () => {
       taskItem.classList.toggle("completed");
   });

   // Delete functionality
   const deleteButton = taskItem.querySelector(".delete-button");
   deleteButton.addEventListener("click", (event) => {
       event.stopPropagation(); // Prevent marking as completed when deleting
       taskItem.remove();
   });
}
