const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDFE2 \uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`\uD83D\uDD34 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`);
  }
};

const findKeyByValue  = function(object, value)  {         //Function takes an object and a value
  for (const key in object) {                                //for in loop. Loops through the object
    if (object[key] === value) {                            // if during the loop in encounters a key whose value is the same as value
      return key;                                           //it returns the key
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log("");
console.log("Below: Test assert equal function")
console.log("");
assertEqual("This function", "is supposed to fail");
assertEqual(1, 1);