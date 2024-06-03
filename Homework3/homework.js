//I didn't separate "creating" and "drawing" the calendar
// because the function is very simple
function createCalendar(year, month) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const calendarBody = document.getElementById('calendarBody');
  const monthYear = document.getElementById('monthYear');
  monthYear.textContent = `${startDate.toLocaleString('en-US', {
    month: 'long',
  })} ${year}`;

  calendarBody.innerHTML = '';

  let date = 1;
  for (let week = 0; week < 6; week++) {
    const row = document.createElement('tr');
    for (let day = 0; day < 7; day++) {
      const cell = document.createElement('td');
      if (week === 0 && day < startDate.getDay()) {
        cell.textContent = '';
      } else if (date > endDate.getDate()) {
        cell.textContent = '';
      } else {
        cell.textContent = date;
        if (
          date === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear()
        ) {
          cell.classList.add('today');
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function previousMonth() {
  const monthYear = document.getElementById('monthYear');
  const [month, year] = monthYear.textContent.split(' ');
  const prevDate = new Date(year, getMonthNumber(month) - 1);
  createCalendar(prevDate.getFullYear(), prevDate.getMonth());
}

function nextMonth() {
  const monthYear = document.getElementById('monthYear');
  const [month, year] = monthYear.textContent.split(' ');
  const nextDate = new Date(year, getMonthNumber(month) + 1);
  createCalendar(nextDate.getFullYear(), nextDate.getMonth());
}

function getMonthNumber(month) {
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  return months[month];
}

const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());

document.getElementById('prevBtn').addEventListener('click', previousMonth);
document.getElementById('nextBtn').addEventListener('click', nextMonth);
