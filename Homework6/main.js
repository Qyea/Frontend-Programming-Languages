const addTaskForm = document.getElementById('addTaskForm');
const taskList = document.getElementById('taskList');
const showCompletedCheckbox = document.getElementById('showCompleted');
const searchInput = document.getElementById('search');
const minDateInput = document.getElementById('minDate');
const maxDateInput = document.getElementById('maxDate');

let tasks = [];

addTaskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const dateInput = document.getElementById('date');
  const priorityInput = document.getElementById('priority');

  const task = {
    title: titleInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
    priority: priorityInput.value,
    completed: false,
  };

  tasks.push(task);
  renderTaskList();
  addTaskForm.reset();
});

function renderTaskList() {
  const showCompleted = showCompletedCheckbox.checked;
  const searchKeyword = searchInput.value.toLowerCase();
  const minDate = minDateInput.value;
  const maxDate = maxDateInput.value;

  const filteredTasks = tasks.filter((task) => {
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

renderTaskList();
