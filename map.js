/*
Function Definition
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

Initial Code
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

//CHECK

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

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  if (result === true) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${array1} !== ${array2}`);
  }
};


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // 🟢 Assertion Passed: g,c,t,m,t === g,c,t,m,t
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);