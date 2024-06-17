import { Task } from '../../types';

const addTaskForm = document.getElementById('addTaskForm');
const taskList = document.getElementById('taskList') as HTMLTableElement;
const showCompletedCheckbox = document.getElementById(
  'showCompleted'
) as HTMLInputElement;
const searchInput = document.getElementById('search') as HTMLInputElement;
const minDateInput = document.getElementById('minDate') as HTMLInputElement;
const maxDateInput = document.getElementById('maxDate') as HTMLInputElement;

let tasks: Task[] = [];

export function addTask() {
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const descriptionInput = document.getElementById(
    'description'
  ) as HTMLInputElement;
  const dateInput = document.getElementById('date') as HTMLInputElement;
  const priorityInput = document.getElementById('priority') as HTMLInputElement;

  const task: Task = {
    title: titleInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
    priority: priorityInput.value,
    completed: false,
  };

  tasks.push(task);
  renderTaskList();
}

function filterTasks() {
  const showCompleted = showCompletedCheckbox.checked;
  const searchKeyword = searchInput.value.toLowerCase();
  const minDate = minDateInput.value;
  const maxDate = maxDateInput.value;

  return tasks.filter((task) => {
    if (!showCompleted && task.completed) {
      return false;
    }

    if (
      searchKeyword &&
      !task.title.toLowerCase().includes(searchKeyword) &&
      !task.description.toLowerCase().includes(searchKeyword)
    ) {
      return false;
    }

    if (minDate && task.date < minDate) {
      return false;
    }

    if (maxDate && task.date > maxDate) {
      return false;
    }

    return true;
  });
}

export function renderTaskList() {
  const filteredTasks = filterTasks();

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

showCompletedCheckbox.addEventListener('change', renderTaskList);
searchInput.addEventListener('input', renderTaskList);
minDateInput.addEventListener('change', renderTaskList);
maxDateInput.addEventListener('change', renderTaskList);
