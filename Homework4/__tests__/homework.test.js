import {
  generateCalendarHTML,
  createCalendar,
  nextMonth,
  previousMonth,
  getMonthNumber,
} from './../homework';

describe('getMonthNumber', () => {
  it("Shouldn't return undefined for the correct name", () => {
    expect(getMonthNumber('May')).not.toBeUndefined();
  });

  it('Should return the correct month number based on the name of it', () => {
    expect(getMonthNumber('January')).toBe(0);
    expect(getMonthNumber('February')).toBe(1);
    expect(getMonthNumber('March')).toBe(2);
    expect(getMonthNumber('October')).toBe(9);
  });

  it('Should return undefined for an invalid month', () => {
    expect(getMonthNumber('InvalidMonth')).toBeUndefined();
  });
});

describe('generateCalendarHTML', () => {
  it('Should generate correct month of June 2024', () => {
    const calendarData = generateCalendarHTML(2024, 5);
    const month = 'June';
    expect(calendarData.monthName).toEqual(month);
  });

  it('Should generate correct Year of May 2004', () => {
    const calendarData = generateCalendarHTML(2004, 4);
    expect(calendarData.year).toBe(2004);
  });

  it('Should generate correct length of the array with rows of February 2024', () => {
    const calendarData = generateCalendarHTML(2024, 1);
    expect(calendarData.calendarRows).not.toBeUndefined();
    expect(calendarData.calendarRows).toHaveLength(6);
  });
});

describe('previousMonth', () => {
  it("Shouldn't be undefined", () => {
    createCalendar(2004, 1);
    previousMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).not.toBeUndefined();
    expect(year).not.toBeUndefined();
  });

  it('Should display the previous month correctly', () => {
    createCalendar(2024, 5);
    previousMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).toBe('May');
    expect(year).toBe('2024');
  });

  it('Should correctly handle going from January to December of the previous year', () => {
    createCalendar(2022, 0);
    previousMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).toBe('December');
    expect(year).toBe('2021');
  });
});

describe('previousMonth', () => {
  it("Shouldn't be undefined", () => {
    createCalendar(2004, 1);
    nextMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).not.toBeUndefined();
    expect(year).not.toBeUndefined();
  });

  it('Should display next month correctly', () => {
    createCalendar(2024, 5);
    nextMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).toBe('July');
    expect(year).toBe('2024');
  });

  it('Should correctly handle going from December to January of the next year', () => {
    createCalendar(2022, 11);
    nextMonth();
    const monthYear = document.getElementById('monthYear').textContent;
    const [month, year] = monthYear.split(' ');

    expect(month).toBe('January');
    expect(year).toBe('2023');
  });
});
