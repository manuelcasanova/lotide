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

//Just to try eqArrays function. 
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // 🟢 Assertion Passed: both arrays are equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // 🔴 Assertion Failed: both arrays are not equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// 🟢 Assertion Passed: both arrays are equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // 🔴 Assertion Failed: both arrays are not equal


//FIRST TRY. I implemented assertArraysEqual but I did not connect it with eqArrays

// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length)  {
//     return `\uD83D\uDD34 Assertion Failed: both arrays are not equal`;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return `\uD83D\uDD34 Assertion Failed: both arrays are not equal`;
//     }
//   }
//   return `\uD83D\uDFE2 Assertion Passed: both arrays are equal`;
// };


// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // 🟢 Assertion Passed: both arrays are equal
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🔴 Assertion Failed: both arrays are not equal
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢 Assertion Passed: both arrays are equal
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // 🔴 Assertion Failed: both arrays are not equal

// console.log("My own tests");

// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢 
// console.log(assertArraysEqual(["A string"], ["A different string"])); //🔴
// console.log(assertArraysEqual(["A string with a length"], ["Dif string same length"])); //🔴
// console.log(assertArraysEqual([1], ["1"])); //🔴
// console.log(assertArraysEqual([1], [1])); //🟢 
// console.log(assertArraysEqual([1], [0])); //🔴
// console.log(assertArraysEqual([false], [0])); //🔴
// console.log(assertArraysEqual([true], [true])); //🟢 