//
//

console.log(3 + 4);

let rating = '2';

if (rating === 3) {
  console.log('You are a superstar');
} else if (rating === 2) {
  console.log('You meet expectations');
} else if (rating === 1) {
  console.log('You need improvement');
} else {
  console.log('No clue what you are bozo');
}

let num = 37;

if (num % 2 !== 0) {
  console.log('Odd Number Bozo');
} else {
  console.log('Even Number Bozo');
}

let highScore = 1430;
let userScore = 1500;

if (userScore >= highScore) {
  console.log(`Good news! You have the new highscore of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Sorry Charlie! Your score of ${userScore}, did not beat the highscore of ${highScore}`
  );
}

let passWord;
passWord = 'Bozo Beak';
console.log(passWord.indexOf(' '));

if (passWord.length >= 6) {
  if (passWord.indexOf(' ') === -1) {
    console.log('Valid Password Bozo');
  } else {
    console.log('Password is long enough, but cannot contain spaces');
  }
} else {
  console.log('Password must be at least 6 characters');
}

let passWord1 = 'chickenGal';

if (passWord1.length >= 8 && passWord1.indexOf(' ') !== -1) {
  console.log('Valid Password');
} else {
  console.log('Invalid Password');
}

let num1 = 13;

if (num1 >= 1 && num1 <= 10) {
  console.log('Bravo Bozo');
} else {
  console.log('Follow the instructions Bozo');
}

let age = 78;

if (age < 6 || age >= 65) {
  console.log('You get in for free');
} else {
  console.log('Pay up Bozo');
}

let color = 'green';

if (color === 'blue' || color === 'red' || color === 'green') {
  console.log('cool color bozo');
}

let loggedInUser = 'bozo';

if (!loggedInUser) {
  console.log('Get out of here');
}

let flavor = 'grape';
if (flavor !== 'cherry' || flavor !== 'strawberry') {
  console.log('Wrong flavor bozo');
}

let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('No clue what day it is Bozo');
    break;
}

let num2 = 7;

num2 == 7 ? console.log('Lucky 7 Bozo') : console.log('Wrong number');

if (num2 === 7) {
  console.log('Lucky 7 Bozo');
} else {
  console.log('Wrong number');
}
