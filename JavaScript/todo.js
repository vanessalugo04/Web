/* To-do list con JavaScript y html. 
Se pueden agregar tareas, eliminar tareas y limpiar la lista. */

let tasks = [];

// funcion para visualizar las tareas
function displayTasks() {
  let html = "";

  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }

  document.getElementById("list").innerHTML = html;
}

// Función para agregar tareas
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;

  if (text === "") {
    return;
  }

  tasks.push(text);

  taskInput.value = "";

  saveTasks();
  displayTasks();
}

// Función para eliminar tareas
function removeTask(i) {
  tasks.splice(i, 1);

  saveTasks();
  displayTasks();
}

// Función para limpiar la lista
function clearAll() {
  tasks = [];

  saveTasks();
  displayTasks();
}

// Guardar en localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cargar tareas
function loadTasks() {
  let saved = localStorage.getItem("tasks");

  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}

loadTasks();
displayTasks();