const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDFE2 " + "\uD83D\uDFE2 " + "Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log("\uD83D\uDD34 " + "\uD83D\uDD34 " + "Assertion Failed: " + actual + "!==" + expected);
  }
};


const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {            //checks if the objects have the same number of keys
    //  test: console.log(Object.keys(object1));
    //   test: console.log(Object.keys(object2));
    return false;
    
  } else {

    for (const keyName of Object.keys(object1)) {                               //We loop. It does not matter if it's through object1 or object2 because they have the same length
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) { //checks if the objects are arrays
        if (!eqObjects(object1[keyName], object2[keyName])) {                     //if not, returns false
          return false;
        }
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') { //checks if they are objects
        if (!eqObjects(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {                          //checks if the objects key's name is the same
          return false;
        }
      }
    }
    return true;
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); //returns true
assertEqual(eqObjects(ab, ba), true); // 🟢 🟢 Assertion Passed: true===true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // 🟢 🟢 Assertion Passed: false===false

const person1 = { name: "Manuel", age: "38", country: "Spain" };
const person2 = { name: "Manuel", age: "38", country: "Spain" };
assertEqual(eqObjects(person1, person2), true); // 🟢 🟢 Assertion Passed: true===true

const person3 = { name: "Manuel", age: "38", country: "Spain" };
const person4 = { name: "Manuel", age: "39", country: "Canada" };
assertEqual(eqObjects(person3, person4), false); // 🟢 🟢 Assertion Passed: false===false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // 🟢 🟢 Assertion Passed: true===true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); //🟢 🟢 Assertion Passed: false===false

console.log("");
console.log("Below: Test assert equal function");
console.log("");
assertEqual("This function", "is supposed to fail");
assertEqual(1, 1);

module.exports = eqObjects;