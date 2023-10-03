const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteButton">Delete</button>
    `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
        event.target.parentElement.remove();
    }
    if (event.target.type === "checkbox") {
        event.target.nextElementSibling.classList.toggle("completed", event.target.checked);
    }
});
