/* eslint-disable no-unused-vars */
console.log(123);

function multiply(x, y = 10) {
  return x * y;
}

function greet(person, greeting = 'Hi') {
  console.log(`${greeting} ${person}`);
}

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

Math.max(2, 3, 4);

console.log(Math.max(2, 3, 4));

const nums = [1, 2, 3, 4, 5];
console.log(Math.min(...nums));

function giveMeFour(a, b, c, d, e) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  // console.log('d', d);
}

const str = 'GOAT';

const colors = ['red', 'yellow', 'orange', 'green'];

console.log('------------------------');

const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish'
];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
//////////////////////////////
//////////////////////////////
//////////////////////////////

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
};

const catDog = {
  ...canine,
  ...feline
};
