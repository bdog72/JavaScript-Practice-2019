console.log(123);

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const wordsOfThree = words.every(word => word.length === 3);
console.log(wordsOfThree);

const specificLastWord = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g';
});
console.log(specificLastWord);
