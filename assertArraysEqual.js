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


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // 🟢 Assertion Passed: both arrays are equal
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🔴 Assertion Failed: both arrays are not equal
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢 Assertion Passed: both arrays are equal
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // 🔴 Assertion Failed: both arrays are not equal

console.log("My own tests");

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢 
console.log(assertArraysEqual(["A string"], ["A different string"])); //🔴
console.log(assertArraysEqual(["A string with a length"], ["Dif string same length"])); //🔴
console.log(assertArraysEqual([1], ["1"])); //🔴
console.log(assertArraysEqual([1], [1])); //🟢 
console.log(assertArraysEqual([1], [0])); //🔴
console.log(assertArraysEqual([false], [0])); //🔴
console.log(assertArraysEqual([true], [true])); //🟢 