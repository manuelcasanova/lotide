const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDFE2 " + "\uD83D\uDFE2 " + "Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log("\uD83D\uDD34 " + "\uD83D\uDD34 " + "Assertion Failed: " + actual + "!==" + expected);
  }
};



/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

//IDEAS
//Iterate through objects: for...in loop or Object.keys method (It takes the object that you want to loop over as an argument and returns an array containing all properties names (or keys)). And then I can use an array looping method.


const findKey = function(object, callback) {           //Function takes an object and a callback
  for (const key in object) {                           //Iterates through the object
    if (callback(object[key])) {               //If the object[key] of the callback function, which is on line xx
      return key;
    }                                                     //the value of the key, returns the key (stops after the first match)
  } //Returns undefined
};

//Writing the callback function in an easier way for me to read it
const callbackF = function(object) {                                 //loops through each key (name of the restaurant)
  if (object.stars === 2) {                                //if the value of the object's key object is 2
    return true;
  }
  return false;
};

// const callbackF = x => x.stars === 2;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, callbackF)); // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, callbackF), "noma");


console.log("");
console.log("Below: Test assert equal function");
console.log("");
assertEqual("This function", "is supposed to fail");
assertEqual(1, 1);