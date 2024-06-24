import "./style.scss";
import { renderTaskList } from "./components/TaskList";
import { addTask } from "./components/AddTask";
import { Task } from "./types";

import { Validator } from "./scripts/Validator";

// Create an instance
const validator = new Validator();

let tasks: Task[] = [];

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
  if (!titleField?.value || titleField?.value.replace(/ /g, "") === "") {
    validator.createError(
      titleField ? titleField : document.createElement("input"),
      "*Title is required"
    );
  } else if (!dateField?.value) {
    validator.createError(
      dateField ? dateField : document.createElement("input"),
      "*Date is required"
    );
  } else if (!priorityField?.value) {
    validator.createError(
      priorityField ? priorityField : document.createElement("input"),
      "*Priority is required"
    );
  } else if (
    !descriptionField?.value ||
    titleField?.value.replace(/ /g, "") === ""
  ) {
    validator.createError(
      descriptionField ? descriptionField : document.createElement("input"),
      "*Description is required"
    );
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
