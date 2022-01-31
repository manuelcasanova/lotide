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

//BELOW: flatten using .flat method

// const flatten = function(array)
//   let newArray = array.flat();
//   return newArray;
// };

//BELOW: flatten using array.isArray and push method

const flatten = function(array) {                       //Flatten is a function that takes an array
  let flatArray = [];
  if (!Array.isArray(array)) {                          //This is just to make it nicer, printing a message if it is not an array
    console.log('This is not an array');
    return false;
  }
  for (const element of array) {                      //Loop through elements of the array
    if (Array.isArray(element)) {                     //If the element is an Array
      for (const subElem of element) {                 //neste loop through each part of the array
        flatArray.push(subElem);                      //Push, add at the end of the array (which is empty) the subelement
      }
    } else {                                          //otherwise it pushes the element, because it's not a subarray
      flatArray.push(element);
    }
  }
  return flatArray;
};


//BELOW: Tests

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, ["three", "four"], 5, [6]])); //[1, 2, three, four, 5, 6]
console.log(flatten([3, 2, [5, "zero"], -1, [6]]), [3, 2, 5, "zero", -1, 6]);
console.log(flatten("hello"), [3, 2, 5, "zero", -1, 6]); //Should print "Not an array".

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([3, 2, [5, "zero"], -1, [6]]), [3, 2, 5, "zero", -1, 6]));



