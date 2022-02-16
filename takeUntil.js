/*
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/


// //This works but it looks like I forced it, and I was not using the callback function

// const takeUntil = function(array, callback) {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < 0 || array[i] === ",") break; {
//         newArr.push(array[i]);
//       }
//     }
//     return newArr; 
//   }


//This is the way two of my classmates did it:

// const takeUntil = function(array, callback) {
//   let finalArray = []
//   for (let arr of array) {
//     if (!callback(arr)) {
//       finalArray.push(arr);
//     }
//     else {
//       return finalArray
//     }
//   }
//   //return finalArray;
// };

//This is my function

const takeUntil = function(array, callback) {     //This function takes an array and a callback funciton
    let newArr = []                               //We'll save the return in an array
    for (let i = 0; i < array.length; i++) {        //Iterate through the whole array
      if (callback(array[i])) {                     //If the call back function happens (if TRUE) we do not push it into the newArray
        return newArr;
      }
      newArr.push(array[i]);                      //otherwise we push(add) to the newArray the element 
    }
    return newArr; 
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);  
console.log(results1); //[ 1, 2, 5, 7, 2 ]

console.log('---'); //---

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]

//Converting const result1 to for loop to understand it better

// const data3 = ["Good", "morning", ",", "Good", "night"];
// const takeTil = function(array) {
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === ",") break; {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr; 
// }
// console.log(takeTil(data3));



//TESTS

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



assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;