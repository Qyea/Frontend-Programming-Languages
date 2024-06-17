import './style.scss';
import { renderTaskList, addTask } from './components/TaskList';

const addTaskForm = document.getElementById('addTaskForm') as HTMLFormElement;

addTaskForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  addTask();
  addTaskForm.reset();
});

renderTaskList();
