import { Task } from '../../types';

export function filterTasks(
  tasks: Task[],
  showCompletedCheckbox: HTMLInputElement,
  searchInput: HTMLInputElement,
  minDateInput: HTMLInputElement,
  maxDateInput: HTMLInputElement
) {
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
