// Select DOM elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to create a new to-do item
function addTodo() {
  const task = todoInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item elements
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Append elements to the list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Append the list item to the to-do list
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = "";
  todoInput.focus();
}

// Function to delete a to-do item
function deleteTodo(e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }
}

// Event listener for adding a to-do
addBtn.addEventListener("click", addTodo);

// Allow adding a to-do by pressing the Enter key
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Event listener for deleting a to-do using event delegation
todoList.addEventListener("click", deleteTodo);
