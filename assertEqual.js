/*
const sum = function(a, b) {
  return a + b;
}

console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);

Prints: Assertion failed
*/

/*

const sumBuggy = function(a, b) {
  return a * b; //the reason it fails: * instead of +
}

console.assert(sumBuggy(1, 2) === 3);

// Prints: Assertion failed
*/

/*
const assertEqual = function(actual, expected) {
  return actual === expected;
}
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Prints: NO OUTPUT, because we are not printing anything to the console
*/

/*
const assertEqual = function(actual, expected) {
  return actual === expected;
}
// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

//Prints: False, True
*/

/*

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("YEAP");
  } else {
    console.log("NOPE");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

Prints: NOPE, YEAP

*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDFE2 " + "\uD83D\uDFE2 " + "Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log("\uD83D\uDD34 " + 	"\uD83D\uDD34 " + "Assertion Failed: " + actual + "!==" + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


//Emoji list: https://unicode.org/emoji/charts/full-emoji-list.html#1f534
//Unicode character search: https://www.fileformat.info/info/unicode/char/search.htm?q=U%2B1F534&preview=entity
//Click on results - matching text
//Go to C/C++/Java source code
//Copy and paste as string


//Below is some code to play with ES6 Template Literals

const assertEqual2 = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`)
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`)
  }
};

assertEqual2("Lighthouse Labs", "Bootcamp");
assertEqual2(1, 1);
