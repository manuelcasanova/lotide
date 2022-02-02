const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${array1} !== ${array2}`);
  }
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

//ABOVE: functions assertArraysEqual and assertEqual

//BELOW: Without

const without = function(source, itemsToRemove) {
  let fixedArray = [];
  let match = false;
  for (let i = 0; i < source.length; i++) { //Iterate through source
    for (let d = 0; d < itemsToRemove.length; d++) {//While iterating through source, for each element, it iterates through itemsToRemove
      if (source[i] === itemsToRemove[d]) { //while iterating, it they match the variable match changes to true (originally it was given the value false)
        match = true;
      }
    }
    if (!match) { //If "not match", so basically if match = false we push (add to the end of an array, in this case an empty array) source [i], that is all the words from source except those that "match"
      fixedArray.push(source[i]);
    } 
    match = false;
  }
  return fixedArray;
};

// //BELOW: Tests

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Code below returns the index of the element we need to remove. But I couldn' t figure out how to continue

