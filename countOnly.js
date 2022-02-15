const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDFE2 \uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`\uD83D\uDD34 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`);
  }
};

//Above: assertEqual function

/*
We will be given an array. For example: "a, a, b, c, d, e, a"
We will be given an object. For example: {a: true, d: true, b: false, f: true}
We want it to return a: 3, d: 1. Why not b? Because "false". Why not e? Because not in object. Why not f? Because not in array
*/


//Below: COUNT ONLY

//The function should report back how many instances of each string were found in the allItems array of strings. We want it to report an object.

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
      results[item] += 1;
      } else {
      results[item] = 1;
      }
    }
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

 
  console.log(assertEqual(result1["Jason"], 1));
  console.log(assertEqual(result1["Karima"], undefined));
  console.log(assertEqual(result1["Fang"], 2));
  console.log(assertEqual(result1["Agouhanna"], undefined)); //This one does not pass because is FALSE in itemsToCount  




  module.exports = countOnly;

