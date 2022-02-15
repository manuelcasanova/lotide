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

// Step 1: Define Object Structure To Return
/*
What would the resulting object look like with the same example string that we used before ("lighthouse in the house")?

Keep in mind that we are supposed to skip spaces.

My answer:
{l: 0, i: 1, 10, g: 2, h: 3, 5, 13, 15 t: 4, 12 o: 6, 16 u: 7, 17, s: 8, 18, e: 9, 14, 19 n: 11 Assuming that the spaces do not count as an index, and the " either

The answer:
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

So that means that the spaces do count.Assuming

This is an object that contains keys (property names) that are arrays.

*/

//IDEA to approach the activity
/*
Variable empty object (results)
loop through the word
inside the loop each letter's index is stored in a declared variable (e. g index). This variable is an array of numbers
do the part that is used in count letters to add if it does not exist. And also the if statement to not count the spaces.
return results
*/

//FUNCTION BELOW


const letterPositions = function(sentence) {
  const results = {};                               //Empty object in which the result will be stored and then printed
  
  for (i = 0; i < sentence.length; i++) {           //Loop through the sencence
    if (sentence[i] !== ' ') {                      //To not count the blank spaces
      if (!results[sentence[i]]) {                  //If the object does not contain the letter, we add it
        results[sentence[i]] = [i]  
      } else {                                      //If it does...
        results[sentence[i]].push(i);               //...we push (add at the end) the letter to the object
      }
    }
  }
  return results;                                   //It returns the object with the keys (letters) and the arrays (position - i)
};
console.log(letterPositions('hello'))



// //Tests for letterPositions function

console.log(assertArraysEqual(letterPositions("hello").e, [1])); //🟢 Assertion Passed: both arrays are equal

//Tests for assertArraysEqual function

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // 🟢 Assertion Passed: both arrays are equal
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🔴 Assertion Failed: both arrays are not equal

module.exports = letterPositions;