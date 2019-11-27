// console.log('-------------------');
// console.log('-------------------');

// function callThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function cry() {
//   console.log('Boo Hoo Hoo');
// }

// console.log(callThreeTimes(cry));

// console.log('-------------------');
// console.log('-------------------');

// function add(x, y) {
//   return x + y;
// }

// const subtract = function(x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function(x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide];

// for (let func of operations) {
//   // console.log(func(add(1, 2)));
//   let result = func(30, 5);
//   console.log(result);
// }

// const thing = {
//   dodoo: multiply
// };

// console.log(thing.dodoo(3, 4));
// const square = function(num) {
//   return num * num;
// };

// console.log(square(7));

// function outer() {
//   let movie = 'Amadeus';
//   function inner() {
//     console.log(movie.toUpperCase());
//   }
//   inner();
// }
// outer();

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }
// console.log(doubleArr([10, 20, 30]));

// if (true) {
//   let animal = 'eel';
//   console.log(animal);
//   console.log(animal);
// }

// console.log('-------------------');
// console.log('-------------------');

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// console.log(repeatNTimes(cry, 5));

// console.log('-------------------');
// console.log('-------------------');

// function pickOne(func1, func2) {
//   let rand = Math.random();
//   console.log(rand);

//   if (rand < 0.5) {
//     func1();
//   } else {
//     func2();
//   }
// }
// console.log(pickOne(cry));

// console.log('-------------------');
// console.log('-------------------');

// function multiplyBy(num) {
//   return function(x) {
//     // console.log('Hi');
//     return x * num;
//   };
// }

// // multiplyBy(3);

// const triple = multiplyBy(3);

// console.log(triple(5));

// console.log('-------------------');
// console.log('-------------------');

// const isChild = makeBetweenFunc(0, 18);

// function makeBetweenFunc(x, y) {
//   return function(num) {};
// }

// makeBetweenFunc(10, 20);

function grumpus() {
  console.log('Hey Bozo');
}
setTimeout(grumpus, 2000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log(btn);
  grumpus();
});

console.log(animal);
var animal = 'Tapir';
