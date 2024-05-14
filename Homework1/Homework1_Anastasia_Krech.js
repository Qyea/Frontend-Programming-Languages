/*
    Homework 1

    1. Create a function fizzBuzz , which outputs numbers from 1 to 100. If number is
    multiple of 3 - output Fizz instead the number. If number is multiple of 5 -
    output Buzz instead the number. If number is multiple both of 3 and 5 - output
    FizzBuzz .
    Try to realize the function without usage of if , switch or ternary operator -
    ? :

*/
function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    const result =
      (isMultipleOf3 && isMultipleOf5 && "FizzBuzz") ||
      (isMultipleOf3 && "Fizz") ||
      (isMultipleOf5 && "Buzz") ||
      i;

    console.log(result);
  }
}

FizzBuzz();

console.log("------------------------------------------------\n");
/*
      2. Create a function isPalindrom , which gets a string as a parameter and returns
      true or false as the result of checking if string is a palindrome or not
      (reads the same from left to right and from right to left)
  */
function isPalindrome(str) {
  const normalizedStr = str.toLowerCase();

  const reversedStr = normalizedStr.split("").reverse().join("");

  return normalizedStr === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("worlddkrow"));
console.log(isPalindrome("Panama"));

console.log("------------------------------------------------\n");
/*
      3. Create a function drawCalendar , which gets two parameters - year, month and
      returns a string with real calendar month for the year, example (use template
      strings ``, spaces and symbol "\n" to beautify view)
  */
function drawCalendar(year, month) {
  const date = new Date(year, month - 1, 1); // "month - 1", because the second argument requires the month index
  const monthName = date.toLocaleString("default", { month: "long" });

  let calendar = `${monthName} ${year}\n`;
  calendar += "Sun Mon Tue Wed Thu Fri Sat\n";

  const firstDay = date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate(); // Get the total number of days in the month

  calendar += " ".repeat(firstDay * 4);

  for (let day = 1; day <= daysInMonth; day++) {
    calendar += day.toString().padStart(3);

    const weekday = (firstDay + day) % 7;
    if (weekday === 0) {
      calendar += "\n";
    } else {
      calendar += " ";
    }
  }
  return calendar;
}

console.log(drawCalendar(2024, 4)); // April 2024

console.log("------------------------------------------------\n");
/*
      4.  Create a function isDeepEqual which gets two parameters (objects or arrays)
      and checks if they are equal by value
  */
function isDeepEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  // arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    // Check if each value in array A exists in array B
    for (let i = 0; i < a.length; i++) {
      if (!isDeepEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  // objects
  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Check if each key in object A exists in object B and their values
    for (let key of keysA) {
      if (!keysB.includes(key) || !isDeepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  // Compare the values
  return a === b;
}

const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };
console.log(isDeepEqual(a, b));
b.prop1 = 1;
console.log(isDeepEqual(a, b));

console.log("------------------------------------------------\n");

/*
      5.  Create a function spiral , which gets two deimension array and return one
      dimensional array with elements positioned by spiral, ex.:
  
      spiral([[4, 5], [6, 7]]); // [4,5,7,6]
  
      spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1,2,3,6,9,8,7,4,5]
  
      spiral([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
      ]);                     // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
  */
function spiral(matrix) {
  const result = [];

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // left to right --->
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    startRow++;

    // top to bottom
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    endCol--;

    // right to left <---
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
      endRow--;
    }

    // bottom to top ^
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startCol]);
      }
      startCol++;
    }
  }

  console.log(result);
}

spiral([
  [4, 5],
  [6, 7],
]);

spiral([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

spiral([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]);

console.log("------------------------------------------------\n");

/*
      6.  Create a function quadraticEquation , which gets koefficients of a quadratic
      equation, and returns an array with roots of that equation (if they are exist):
  
      quadraticEquation(1, -8, 72); // []
      quadraticEquation(1, 12, 36); // [-6]
      quadraticEquation(1, 6, 1); // [-0.1715728752538097, -5.82842712474619]
  */
function quadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`[${root1}, ${root2}]`);
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    console.log(`[${root}]`);
  } else {
    console.log("[]");
  }
}

quadraticEquation(1, -8, 72);
quadraticEquation(1, 12, 36);
quadraticEquation(1, 6, 1);
