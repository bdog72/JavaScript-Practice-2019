console.log(123);

let shoppingList1 = ['cereal', 'cheese', 'ice'];

let lottoNumbers = [45, 12, 32, 26, 5];

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors[colors.length - 3]);

let shoppingList = ['Cheddar Cheese', '2% Milk'];
console.log(shoppingList);
shoppingList[1] = 'Whole Milk';
console.log(shoppingList);
shoppingList[2] = 'Ice Cream';
console.log(shoppingList);
shoppingList[shoppingList.length] = 'Dog Food';
console.log(shoppingList);

// prettier - ignore;
let topSongs = ['apple', 'banana', 'cherries', 'dewMelon'];

topSongs.push('Fortunate Son');
console.log(topSongs);

let dishesToDo = ['big platter'];

console.log(dishesToDo);
dishesToDo.unshift('small plate');
console.log(dishesToDo);
dishesToDo.unshift('large plate');
console.log(dishesToDo);
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

if (ingredients.includes('flour')) {
  console.log('You good to go bozo');
}
let result;
result = ingredients.includes('corn starch');
console.log(result);

console.log('--------');

result = ingredients.indexOf('eel');
console.log(result);

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let result1;

// result1 = letters.split(' ');
result1 = letters;
console.log(result1);
result1 = letters.reverse();
result1 = letters.join('');
console.log(result1);

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
console.log(swimmers);
let mammals = animals.slice(2, 4);
console.log(mammals);
let reptiles = animals.slice(4, 6);
console.log(reptiles);
let a;
a = animals.splice(0, 2, 'SHARK', 'OCTOPUS');
a = animals.splice(2, 2, 'frog');
console.log(a);
console.log(animals);

a = animals.splice(3, 1);

console.log(a);
console.log(animals);

// prettier - ignore;
let people = ['Mrs.Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

people.sort();
console.log(people);

// prettier - ignore;
let nums = [34, 10, 10000, 67, 99];

nums.sort();
console.log(nums);

let fruit = 'orange';
let color = fruit;

console.log(fruit);
console.log(color);

fruit = 'watermelon';

console.log(fruit);
console.log(color);

const myArray = [];
console.log(myArray);

// prettier-ignore
const animalPairs = [
  ['doe','buck'],
  ['ewe','ram',],
  ['peahen','peacock',]
]

console.log(animalPairs);
