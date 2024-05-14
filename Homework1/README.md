# Homework 1

**Tasks**

1. Create a function fizzBuzz , which outputs numbers from 1 to 100. If number is
   multiple of 3 - output Fizz instead the number. If number is multiple of 5 -
   output Buzz instead the number. If number is multiple both of 3 and 5 - output FizzBuzz.
   **Try to realize the function without usage of if , switch or ternary operator - ? :**

2. Create a function isPalindrom , which gets a string as a parameter and returns
   true or false as the result of checking if string is a palindrome or not
   (reads the same from left to right and from right to left).

3. Create a function drawCalendar , which gets two parameters - year, month and
   returns a string with real calendar month for the year, example (use template
   strings ``, spaces and symbol "\n" to beautify view).

4. Create a function isDeepEqual which gets two parameters (objects or arrays)
   and checks if they are equal by value:

> const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
> const b = { list: [1, 2, 3], o: { x: 2 } };
> isDeepEqual(a, b); // false
> b.prop1 = 1;
> isDeepEqual(a, b); // true

5. Create a function spiral , which gets two deimension array and return one-dimensional array with elements positioned by spiral, ex.:

> spiral([[4, 5], [6, 7]]); // [4,5,7,6]
> spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1,2,3,6,7,8,7,4,5]
> spiral([[1, 2, 3, 4, 5],
> [6, 7, 8, 9, 10],
> [11, 12, 13, 14, 15],
> [16, 17, 18, 19, 20]
> ]); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

6. Create a function quadraticEquation , which gets koefficients of a quadratic
   equation, and returns an array with roots of that equation (if they are exist):

Example

> quadraticEquation(1, -8, 72); // x^2 - 8*x + 72 -> []
> quadraticEquation(1, 12, 36); // x^2 + 12*x + 36 -> [-6]
> quadraticEquation(1, 6, 1); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097,-5.82842712474619]

> **PS:** I really hope that I have completed **all** the requirements.
