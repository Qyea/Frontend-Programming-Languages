import "./style.scss";
import { renderTaskList } from "./components/TaskList";
import { addTask } from "./components/AddTask";
import { Task } from "./types";

import { Validator } from "./scripts/Validator";

// Create an instance
const validator = new Validator();

let tasks: Task[] = [];

function removePopup(popupElement: HTMLElement) {
  const parentElement = popupElement.parentNode;
  if (parentElement) {
    parentElement.removeChild(popupElement);
  }
}

const addTaskForm = document.getElementById("addTaskForm") as HTMLFormElement;
const taskList = document.getElementById("taskList") as HTMLTableElement;
const showCompletedCheckbox = document.getElementById(
  "showCompleted"
) as HTMLInputElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const minDateInput = document.getElementById("minDate") as HTMLInputElement;
const maxDateInput = document.getElementById("maxDate") as HTMLInputElement;

addTaskForm.addEventListener("submit", function (event: Event) {
  event.preventDefault();
  const titleField = document.getElementById("title") as HTMLInputElement;
  const dateField = document.getElementById("date") as HTMLInputElement;
  const priorityField = document.getElementById("priority") as HTMLInputElement;
  const descriptionField = document.getElementById(
    "description"
  ) as HTMLInputElement;

  //Usage of my Validator
  if (
    validator.checkError(titleField) ||
    validator.checkError(dateField) ||
    validator.checkError(priorityField) ||
    validator.checkError(descriptionField)
  ) {
    const popupElement = document.createElement("div");
    const icon = new Image(16, 16);
    icon.src = "https://www.svgrepo.com/show/157825/error.svg";

    popupElement.className = "popup";

    popupElement.textContent = "Validation error, fill in the required fields!";
    popupElement.appendChild(icon);

    document.body.appendChild(popupElement);

    setTimeout(() => {
      if (popupElement.parentNode !== null) {
        popupElement.parentNode.removeChild(popupElement);
      }
    }, 2000);
  }
  // everything is okay
  else {
    addTask(
      tasks,
      taskList,
      showCompletedCheckbox,
      searchInput,
      minDateInput,
      maxDateInput
    );
    addTaskForm.reset();
  }
});

showCompletedCheckbox.addEventListener("change", (event: Event) => {
  renderTaskList(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
  event.preventDefault();
});

searchInput.addEventListener("input", (event: Event) => {
  renderTaskList(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
  event.preventDefault();
});

minDateInput.addEventListener("change", (event: Event) => {
  renderTaskList(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
  event.preventDefault();
});

maxDateInput.addEventListener("change", (event: Event) => {
  renderTaskList(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
  event.preventDefault();
});

renderTaskList(
  tasks,
  taskList,
  showCompletedCheckbox,
  searchInput,
  minDateInput,
  maxDateInput
);
