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

//BELOW: Function middle


const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result; //If the array has one or two numbers, there's no middle, return an empty array
  } else if (array.length > 2 && array.length % 2 !== 0) { //If the array has more than two numbers and is odd
    let mid = array[Math.floor(array.length / 2)];
    return [mid]; //I don't know if this is a good approach. It was returning a number, but we wanted it to be an array. So I just wrapped the variable mid in square brackets
  } else if (array.length > 2 && array.length % 2 === 0) { //If the array has more than two numbers and is even
    let mid2 = [];                                          //New array that contains two elements
    let mid2sub1 = array[Math.floor(array.length / 2) - 1];
    let mid2sub2 = array[Math.floor(array.length / 2)];
    mid2.push(mid2sub1, mid2sub2);
    return mid2;
  }
};

console.log(middle([1])); // []
console.log(middle([1, 2])); // []
console.log(middle([1, 5, 3])); // [5]
console.log(middle([1, 2, 3, 4, 5, 7])); // [3, 4]
console.log(middle([1, 5, 8, 6, 17, 24])); // [8, 6]
console.log(middle([1, 2, "hi", 4, 5, 7])); // [hi, 4]

//BELOW: Tests

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));