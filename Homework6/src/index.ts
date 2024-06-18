import './style.scss';
import { renderTaskList } from './components/TaskList';
import { addTask } from './components/AddTask';
import { Task } from './types';

let tasks: Task[] = [];
const addTaskForm = document.getElementById('addTaskForm') as HTMLFormElement;
const taskList = document.getElementById('taskList') as HTMLTableElement;
const showCompletedCheckbox = document.getElementById(
  'showCompleted'
) as HTMLInputElement;
const searchInput = document.getElementById('search') as HTMLInputElement;
const minDateInput = document.getElementById('minDate') as HTMLInputElement;
const maxDateInput = document.getElementById('maxDate') as HTMLInputElement;

addTaskForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  addTask(
    tasks,
    taskList,
    showCompletedCheckbox,
    searchInput,
    minDateInput,
    maxDateInput
  );
  addTaskForm.reset();
});

showCompletedCheckbox.addEventListener('change', (event: Event) => {
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

searchInput.addEventListener('input', (event: Event) => {
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

minDateInput.addEventListener('change', (event: Event) => {
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

maxDateInput.addEventListener('change', (event: Event) => {
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
