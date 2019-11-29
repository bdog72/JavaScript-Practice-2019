// console.log(123);

// let subReddits = ['soccer', 'popheads', 'cringe', 'books'];

// for (let sub of subReddits) {
//   console.log(sub);
// }

// for (let character of 'bozo') {
//   console.log(character.toUpperCase());
// }

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

console.log('-----------------');

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// console.log(magicSquare);

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess !== target) {
//   console.log(`Target: ${target}\n Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target}\n Guess: ${guess}`);
// console.log(guess);

// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log('Outer Loop:', i);
//   for (let j = 10; j >= 0; j -= 5) {
//     console.log('  Inner Loop:', j);
//   }
// }

// let str = 'LOL';

// for (let i = 0; i <= 4; i++) {
//   console.log('Outer:', i);
//   for (let j = 0; j < str.length; j++) {
//     console.log(' Inner:', str[j]);
//   }
// }

// const examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// console.log(examScores);

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

// for (let a = 5; a <= 10; a++) {
//   // console.log(a);
//   console.log('Hello:', a);
// }
