//1) write custom realization of method bind in javascript
const context = { person: 'epicTeacher' };

function bind(fn, context, ...rest) {
  return function (...args) {
    const fId = Date.now().toString();

    context[fId] = fn;

    const result = context[fId](...rest.concat(args));

    delete context[fId];

    return result;
  };
}

function foo(phone, email) {
  console.log(`person: ${this.person}, phone: ${phone}, email: ${email}`);
}

//some examples of usage
bind(foo, context)('+7777777777', 'some@email.com');
bind(foo, context, '+7777777777')('some@email.com');
bind(foo, context, '+7777777777', 'some@email.com')();

/*
2) create an object with a magic property, and when any value is assigned
  to that property, current date will be output and value should be stored
  in the additional property counter. But if we read that property from the
  object, additional property counter will be incremented and output, ex.:

  o.magicProperty = 5; // 'Sat Mar 24 2018 13:48:47 GMT+0300 (+03) -- 5'
  console.log(o.magicProperty); // 6
  console.log(o.magicProperty); // 7
  console.log(o.magicProperty); // 8
 */
const o = {
  counter: 0,

  get magicProperty() {
    this.counter++;
    return this.counter;
  },

  set magicProperty(value) {
    console.log(`${new Date()} -- ${value}`);
    this.counter = value;
  },
};

o.magicProperty = 5; // date'
console.log(o.magicProperty); // 6
console.log(o.magicProperty); // 7
console.log(o.magicProperty); // 8

/* 3)create a function-calculator which accepts two numbers and sign for calculation, 
  but the signatuir of the function should looks like that:
  calc(1, 2)('+'); // 3
  calc(1, 2)('/'); // 0.5 */

function calc(num1, num2) {
  return function (sign) {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        throw new Error('Invalid sign');
    }
  };
}

console.log(calc(1, 2)('+'));
console.log(calc(1, 2)('/'));

/* 4) create a function curry, which accepts any function with mathematical
  logic and the exact amout of arguments for further calls as it was declared
  in that function, ex.:

  function sum2(x, y) { // 2 parameters
  return x + y;
  }
  function sum4(a, b, c, d) { // 4 parameters
  return a + b + c + d;
  }
  curry(sum2)(1)(2); // 2 calls, after first wrapping call, returns 3
  curry(sum4)(2)(3)(4)(5); // 4 calls, after first wrapping call, returns 14 */

function curry(fn) {
  const arity = fn.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function sum2(x, y) {
  return x + y;
}

function sum4(a, b, c, d) {
  return a + b + c + d;
}

console.log(curry(sum2)(1)(2)); // 3
console.log(curry(sum4)(2)(3)(4)(5)); // 14

/* 5) create a function, which can not be used as a constructor (can not be
called with operator new)*/

function myFunction() {
  if (new.target) {
    throw new Error('This function cannot be used as a constructor.');
  }

  console.log('Used!');
}

myFunction();

//Commented because of an error. Without it you couldn't see result of task 7
//new myFunction();

/* 6)create a function sleep(seconds), which will work on the next way:

  console.log(new Date()); // Sun Oct 08 2017 10:44:34 GMT+0300 (+03)
  sleep(9);
  console.log(new Date()); // Sun Oct 08 2017 10:44:43 GMT+0300 (+03)

  // it means, that the second console.log will be triggered only after 9 seconds */
function sleep(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
}

console.log(new Date());

sleep(9).then(() => {
  console.log(new Date());
});

/* Create a function getCounter, ex.:
  var c = getCounter(5);
  c
  .log() // 5 <- should outputs the result
  .add(4) // <- shoild add some value to the result
  .log() // 9
  .add(3)
  .log() // 12
  .reset() // <- resets the result
  .log() // 0
  .add(8)
  .log(); // 8*/

function getCounter(initialValue) {
  let counter = initialValue;

  return {
    log() {
      console.log(counter);
    },
    add(value) {
      counter += value;
    },
    reset() {
      counter = 0;
    },
  };
}

let c = getCounter(5); //sorry, I'm afraid of deprecated var >\\\<
c.log(); // 5
c.add(4);
c.log(); // 9
c.add(3);
c.log(); // 12
c.reset();
c.log(); // 0
c.add(8);
c.log(); // 8
