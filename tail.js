const assertEqual = require('./assertEqual'); //Because it's on the same folder I only put one dot

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`);
//   } else {
//     console.log(`\uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`);
//   }
// };

const tail = function(array) { //Function tail is going to return the tail of an array (A NEW ARRAY, not modify the one that is passed)
  const tailOfArray = array.slice(1); //(array.shift) shift method removes the first item of an array but changes the original array and returns the shifted element. SO IT'S NOT WHAT WE NEED
  return tailOfArray;
};

// console.log(tail(["1", "2", "3", "4"]));
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//There is a workaround to this problem where we could still use our simple assertEqual to test out our tail function. How? Spend some time to think of and/or discuss a possible solution with your peers prior to exposing the answer below.


// //My answer
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.toString(), "Lighthouse,Labs");
// //console.log(result.toString());

// //The answer
// // Instead of comparing arrays, a workaround to this limitation could be to compare the values of the returned tail array directly, like this:

// const result2 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result2.length, 2); // ensure we get back two elements
// assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result2[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;