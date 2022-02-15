const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
