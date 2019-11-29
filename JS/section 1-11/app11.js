/* eslint-disable no-unused-vars */
console.log(123);

function sum(...nums) {
  // console.log(nums);
  return nums.reduce((total, currentValue) => {
    return total + currentValue;
  });
}

function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

const multiply = (...nums) =>
  nums.reduce((total, currentValue) => total * currentValue);

// const multiply = (...nums) => {
//   return nums.reduce((total, currentValue) => {
//     return total * currentValue;
//   });
// };
