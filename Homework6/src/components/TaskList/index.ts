import { Task } from '../../types';
import { filterTasks } from '../Filter';

export function renderTaskList(
  tasks: Task[],
  taskList: HTMLTableElement,
  showCompletedCheckbox: HTMLInputElement,
  searchInput: HTMLInputElement,
  minDateInput: HTMLInputElement,
  maxDateInput: HTMLInputElement
) {
  const filteredTasks = filterTasks(
    tasks,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );

  taskList.innerHTML = '';

  filteredTasks.forEach((task) => {
    const row = document.createElement('tr');
    const completedCell = document.createElement('td');
    const titleCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const priorityCell = document.createElement('td');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    checkbox.addEventListener('change', () => {
      task.completed = !task.completed;
    });

    completedCell.appendChild(checkbox);
    titleCell.textContent = task.title;
    descriptionCell.textContent = task.description;
    dateCell.textContent = task.date;
    priorityCell.textContent = task.priority;

    row.appendChild(completedCell);
    row.appendChild(titleCell);
    row.appendChild(descriptionCell);
    row.appendChild(dateCell);
    row.appendChild(priorityCell);

    taskList.appendChild(row);
  });
}
