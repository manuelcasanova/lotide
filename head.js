const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`)
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`)
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(array) { //Function head is going to return the 1st item of the array
const firstItemArray = array[0]; 
return firstItemArray;
};

assertEqual(head([5,6,7]), 5);   //head is going to return 5, assertEqual is going to confirm = 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //head is going to return "Hello", assertEqual is going to confirm = "Hello"
assertEqual(head(["oneElement"]), "oneElement");
assertEqual(head([]), );