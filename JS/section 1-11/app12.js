/* eslint-disable no-unused-vars */
console.log(123);

// prettier-ignore
const raceResults = [
  'a b',
  'c d',
  'e f',
  'g h'
]

const [gold, silver, bronze] = raceResults;

const runner = {
  first: 'Bozo',
  last: 'Beak',
  country: 'USA',
  title: 'King of the bozo tribe'
};

const { first, last } = runner;

const results = [
  {
    first: 'a1',
    last: 'b1',
    country: 'c1'
  },
  {
    first: 'a2',
    last: 'b2',
    country: 'c2'
  },
  {
    first: 'a3',
    last: 'b3',
    country: 'c3'
  }
];

const [, { country }] = results;

const runner1 = {
  first: 'Dozo',
  last: 'Beak',
  country: 'USA',
  title: 'King of the bozo tribe'
};

function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last} ${title}`);
}
