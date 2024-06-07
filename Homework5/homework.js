class Calendar {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.startDate = new Date(year, month, 1);
    this.endDate = new Date(year, month + 1, 0);
    this.calendarBody = document.getElementById('calendarBody');
    this.monthYear = document.getElementById('monthYear');
    this.notes = JSON.parse(localStorage.getItem('calendarNotes')) || {};
    this.init();
  }

  init() {
    this.renderHeader();
    this.renderCalendar();
    this.attachEventListeners();
  }

  renderHeader() {
    this.monthYear.textContent = `${this.startDate.toLocaleString('en-US', {
      month: 'long',
    })} ${this.year}`;
  }

  renderCalendar() {
    this.calendarBody.innerHTML = '';

    let date = 1;
    for (let week = 0; week < 6; week++) {
      const row = document.createElement('tr');
      for (let day = 0; day < 7; day++) {
        const cell = document.createElement('td');
        const div = document.createElement('div');
        div.setAttribute('class', 'notes-input');
        if (week === 0 && day < this.startDate.getDay()) {
          cell.textContent = '';
        } else if (date > this.endDate.getDate()) {
          cell.textContent = '';
        } else {
          cell.textContent = date;
          const dateKey = this.getDateKey(date);
          if (dateKey in this.notes) {
            this.renderNotes(cell, dateKey);
          }
          if (
            date === new Date().getDate() &&
            this.month === new Date().getMonth() &&
            this.year === new Date().getFullYear()
          ) {
            cell.classList.add('today');
          }
          date++;
        }
        cell.appendChild(div);
        row.appendChild(cell);
      }
      this.calendarBody.appendChild(row);
    }
  }

  renderNotes(cell, dateKey) {
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-container');

    this.notes[dateKey].forEach((note) => {
      const noteElement = this.createNoteElement(note, dateKey);
      notesContainer.appendChild(noteElement);
    });

    cell.appendChild(notesContainer);
  }

  renderNote(cell, dateKey) {
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-container');

    console.log(this.notes);

    this.notes[dateKey].forEach((note) => {
      const noteElement = this.createNoteElement(note, dateKey);
      if (note.dateKey === dateKey) {
        notesContainer.appendChild(noteElement);
      }
    });

    cell.appendChild(notesContainer);
  }

  createNoteElement(note, dateKey) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = note;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'x';

    deleteButton.addEventListener('click', () => {
      this.deleteNoteFromDate(dateKey, note);
      noteElement.remove();
    });

    noteElement.appendChild(deleteButton);
    return noteElement;
  }

  attachEventListeners() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => this.previousMonth());
    nextBtn.addEventListener('click', () => this.nextMonth());

    this.calendarBody.addEventListener('click', (event) => {
      const cell = event.target.closest('td');
      if (cell) {
        this.handleCellClick(event, cell);
      }
    });
  }

  previousMonth() {
    const prevDate = new Date(this.year, this.month - 1);
    this.year = prevDate.getFullYear();
    this.month = prevDate.getMonth();
    this.startDate = new Date(this.year, this.month, 1);
    this.endDate = new Date(this.year, this.month + 1, 0);
    this.renderHeader();
    this.renderCalendar();
  }

  nextMonth() {
    const nextDate = new Date(this.year, this.month + 1);
    this.year = nextDate.getFullYear();
    this.month = nextDate.getMonth();
    this.startDate = new Date(this.year, this.month, 1);
    this.endDate = new Date(this.year, this.month + 1, 0);
    this.renderHeader();
    this.renderCalendar();
  }

  handleCellClick(event, cell) {
    //Because of event
    const target = event.target;
    if (target.tagName.toLowerCase() === 'input') {
      return;
    }
    const date = parseInt(cell.textContent);
    const dateKey = this.getDateKey(date);
    const notesContainer = cell.querySelector('.notes-input');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Write here your note!');
    input.classList.add('note-input');

    const saveButton = document.createElement('button');

    saveButton.textContent = 'Save';
    saveButton.classList.add('save-button');

    saveButton.addEventListener('click', () => {
      const note = input.value.trim();
      if (note !== '') {
        this.addNoteToDate(dateKey, note);
        const noteElement = this.createNoteElement(note, dateKey);

        const existingNotes = cell.querySelectorAll('.note');
        const existingDivs = cell.querySelector('.notes-container');
        console.log(existingNotes);
        if (existingNotes !== null) {
          existingNotes.forEach((existingNote) => {
            console.log(existingNote);
            existingNote.remove();
            existingDivs.remove();
          });
        }

        notesContainer.appendChild(noteElement);
        input.value = '';
        this.renderNotes(cell, dateKey);
      }
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-button');

    cancelButton.addEventListener('click', () => {
      input.value = '';
      input.remove();
      saveButton.remove();
      cancelButton.remove();
    });

    notesContainer.innerHTML = '';
    notesContainer.appendChild(input);
    notesContainer.appendChild(saveButton);
    notesContainer.appendChild(cancelButton);
  }

  addNoteToDate(dateKey, note) {
    if (dateKey in this.notes) {
      this.notes[dateKey].push(note);
    } else {
      this.notes[dateKey] = [note];
    }
    this.saveNotesToLocalStorage();
  }

  deleteNoteFromDate(dateKey, note) {
    if (dateKey in this.notes) {
      const index = this.notes[dateKey].indexOf(note);
      if (index !== -1) {
        this.notes[dateKey].splice(index, 1);
        if (this.notes[dateKey].length === 0) {
          delete this.notes[dateKey];
        }
        this.saveNotesToLocalStorage();
      }
    }
  }

  saveNotesToLocalStorage() {
    localStorage.setItem('calendarNotes', JSON.stringify(this.notes));
  }

  getDateKey(date) {
    const monthKey = this.getMonthKey(this.startDate.getMonth());
    return `${this.year}-${monthKey}-${date}`;
  }

  getMonthKey(month) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[month];
  }
}

const currentDate = new Date();
const calendar = new Calendar(
  currentDate.getFullYear(),
  currentDate.getMonth()
);
