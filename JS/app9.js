console.log(123);

const nums = [10, 20, 30, 40, 50];
const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);

const grades = [98, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((accumulator, currentValue) => {
  if (currentValue > accumulator) {
    return currentValue;
  }
  return accumulator;
});
console.log(maxGrade);

console.log('------------');
console.log('------------');
console.log('------------');

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(results);
