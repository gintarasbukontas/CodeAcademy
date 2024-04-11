// function setNotification(value) {
//   localStorage.setItem("notification", value);
// }
// setNotification("Labas");

// function getNotification(key) {
//   const response = localStorage.getItem(key);
//   //   alert(response);
// }
// getNotification("notification");

const addTaskForm = document.querySelector("#addTaskForm");
const addTaskInput = document.querySelector("#addTaskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskListForm = document.querySelector("#taskListForm");

const checkboxes = [];
const tasks = [];

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

addTaskButton.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("display-flex");
  taskListForm.append(div);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  div.append(checkBox);
  checkboxes.push(checkBox);
  const task = document.createElement("p");
  task.textContent = addTaskInput.value;
  checkBox.append(task);
  div.append(task);
  tasks.push(task);
  const removeTask = document.createElement("button");
  removeTask.classList.add("removeTaskButton");
  removeTask.textContent = "X";
  task.append(removeTask);
  removeTask.onclick = function () {
    task.remove();
    checkBox.remove();
  };
  addTaskInput.value = "";

  removeTask.addEventListener("click", () => {});
});

function completeTask() {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      tasks[i].classList.add("complete");
      tasks[i].classList.remove("incomplete");
    } else {
      tasks[i].classList.add("incomplete");
      tasks[i].classList.remove("complete");
    }
  }
}

document.addEventListener("change", () => {
  completeTask();
});
