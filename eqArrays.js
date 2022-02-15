const assertEqual = require('./assertEqual');

//SECOND ATTEMPT

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\uD83D\uDFE2 \uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`);
//   } else {
//     console.log(`\uD83D\uDD34 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`);
//   }
// };

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //Checks if the length of arrays is the same. Obviously, this is the first thing we should check. If it's not the same, they are no equal, it returns false and it does not run anything else.
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //Now we loop through array1. Why array1? Well, both arrays have the same length.
    if (array1[i] !== array2[i]) {//with this loop they compare each index of array1 with equivalent idex of array2. If they are not equal returns false
      return false;
    }
  }
  return true; //otherwise returns true.
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should pass
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); //should pass


// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

module.exports = eqArrays;