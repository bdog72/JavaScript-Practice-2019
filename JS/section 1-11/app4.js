/* eslint-disable no-unused-vars */
console.log(123);

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];

  const valIdx = Math.floor(Math.random() * values.length);
  const value = values[valIdx];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];

  return {
    suit,
    value
  };

  // console.log(value, suit);
}

// getCard();
//////////////////////////////////////////////////

function isPangram(sentence) {
  // const lettersOfAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let loweredCase = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    // console.log(char);
    if (loweredCase.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram('THE five boxing wizards jumnp quickly'));
console.log('----------------------');
console.log('----------------------');

///////////////////////////////////////////////

function average(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}
console.log(average([1, 5]));

///////////////////////////////////////////////

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }

  if (password.indexOf(' ') !== -1) {
    return false;
  }

  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword('', ''));
