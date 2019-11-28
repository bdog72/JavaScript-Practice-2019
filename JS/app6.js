console.log(123);

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles);

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  };
});
console.log(numDetail);

const abbrevs = words.map(function(word) {
  return word
    .toUpperCase()
    .split('')
    .join('.');
});
console.log(abbrevs);

console.log('------------------');
console.log('------------------');
console.log('------------------');

const square = n => n * n;
console.log(square(2));

const numbers1 = [20, 21, 22, 23, 24, 25, 26, 27];

const doubles1 = numbers.map(n => {
  return n * 2;
});

console.log(doubles1);

const parityList = numbers1.map(n => {
  return n % 2 === 0 ? 'even' : 'odd';
});

console.log(parityList);

let movies = [
  'The fantastic Mr. Fox',
  'Mrs. Doubtfire',
  'Mr and Mrs. Smith',
  'Mr. Deeds'
];

const movieWordSearch = movies.find(movie => {
  return movie.includes('Mrs');
});
console.log(movieWordSearch);

const nums1 = [34, 35, 67, 54, 109, 102, 32, 9];

const littleNums = nums1.filter(num => num <= 50);

console.log(littleNums);

const oddOrEven = nums1.filter(num => {
  // num % 2 === 0 ? 'even' : 'odd';
  return num % 2 === 1;
});

console.log(oddOrEven);

console.log('----------------');
console.log('----------------');
console.log('----------------');

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
];

const goodBooks = books.filter(book => book.rating > 4.3);

console.log(goodBooks);

const includesFiction = books.filter(book => book.genres.includes('epic'));

console.log(includesFiction);
