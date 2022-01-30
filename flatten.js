const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length)  {
    return `\uD83D\uDD34 Assertion Failed: both arrays are not equal`;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `\uD83D\uDD34 Assertion Failed: both arrays are not equal`;
    }
  }
  return `\uD83D\uDFE2 Assertion Passed: both arrays are equal`;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { 
    return false;
  }
  for (let i = 0; i < array1.length; i++) { 
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//ABOVE: functions assertArraysEqual and assertEqual


//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
//Given an array with other arrays inside, it can flatten it into a single-level array.

//BELOW: flatten

const flatten = function(array) {
  let newArray = array.flat();
  return newArray;
};

//The code above seems to work but it seems to simple compared to other activities. Wondering if it' s correct.

//Another student suggested to do something like this, I may try:

//nested for loop
//if not array just push (ARRAY.isARRAY())
//push array to other array
//console.log the new array


//Below: It returns an array with various strings separated by commas. So it's not what the exercise requires.
//Originally it was let flattened = array.toString...etc...etc
//Then I noticed it could be done in two lines... return array.toString...etc...etc 

// const flatten = function(array) {
//   return array.toString().split(","); //Array is transformed in String and then it splits the string in array of substrings separated by a comma
//   // for (i = 0; i < array.length; i++) {
//   //   if (Array.isArray(array)) {
//   //     return flattened;
//   //   }
//   // }
// };


// //BELOW: Tests

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, ["three", "four"], 5, [6]])); //[1, 2, three, four, 5, 6]
console.log(flatten([3, 2, [5, "zero"], -1, [6]]), [3, 2, 5, "zero", -1, 6]);

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([3, 2, [5, "zero"], -1, [6]]), [3, 2, 5, "zero", -1, 6]));



