import { Task } from "../../types";
import { renderTaskList } from "../TaskList";

export function addTask(
  tasks: Task[],
  taskList: HTMLTableElement,
  showCompletedCheckbox: HTMLInputElement,
  searchInput: HTMLInputElement,
  minDateInput: HTMLInputElement,
  maxDateInput: HTMLInputElement
) {
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const descriptionInput = document.getElementById(
    "description"
  ) as HTMLInputElement;
  const dateInput = document.getElementById("date") as HTMLInputElement;
  const priorityInput = document.getElementById("priority") as HTMLInputElement;

  const task: Task = {
    title: titleInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
    priority: priorityInput.value,
    completed: false,
  };

  tasks.push(task);
  renderTaskList(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
}
