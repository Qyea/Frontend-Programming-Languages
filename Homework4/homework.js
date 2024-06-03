const { JSDOM } = require('jsdom');
const { document } = new JSDOM(
  '<!doctype html><html><body><div id="calendar"><div class="header"><button class="calendar-button" id="prevBtn"><img alt="arrow" src="./assets/left-arrow.png" width="12px" /></button><h2 id="monthYear"></h2><button class="calendar-button" id="nextBtn"><img alt="arrow" src="./assets/right-arrow.png" width="12px" /></button></div><table><thead class="calendar-days"><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>  <tbody id="calendarBody"></tbody></table</div></body></html>'
).window;
global.document = document;

export function generateCalendarHTML(year, month) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const monthName = startDate.toLocaleString('en-US', { month: 'long' });
  const calendarRows = [];

  let date = 1;
  for (let week = 0; week < 6; week++) {
    const rowCells = [];
    for (let day = 0; day < 7; day++) {
      const cell = {};
      if (week === 0 && day < startDate.getDay()) {
        cell.value = '';
      } else if (date > endDate.getDate()) {
        cell.value = '';
      } else {
        cell.value = date;
        if (
          date === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear()
        ) {
          cell.isToday = true;
        }
        date++;
      }
      rowCells.push(cell);
    }
    calendarRows.push(rowCells);
  }

  return {
    monthName,
    year,
    calendarRows,
  };
}

export function createCalendar(year, month) {
  const calendarData = generateCalendarHTML(year, month);
  const calendarBody = document.getElementById('calendarBody');
  const monthYear = document.getElementById('monthYear');
  monthYear.textContent = `${calendarData.monthName} ${calendarData.year}`;

  calendarBody.innerHTML = '';

  for (const rowCells of calendarData.calendarRows) {
    const row = document.createElement('tr');
    for (const cell of rowCells) {
      const cellElement = document.createElement('td');
      cellElement.textContent = cell.value;
      if (cell.isToday) {
        cellElement.classList.add('today');
      }
      row.appendChild(cellElement);
    }
    calendarBody.appendChild(row);
  }
}

export function previousMonth() {
  const monthYear = document.getElementById('monthYear');
  const [month, year] = monthYear.textContent.split(' ');
  const prevDate = new Date(year, getMonthNumber(month) - 1);
  createCalendar(prevDate.getFullYear(), prevDate.getMonth());
}

export function nextMonth() {
  const monthYear = document.getElementById('monthYear');
  const [month, year] = monthYear.textContent.split(' ');
  const nextDate = new Date(year, getMonthNumber(month) + 1);
  createCalendar(nextDate.getFullYear(), nextDate.getMonth());
}

export function getMonthNumber(month) {
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
