const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {            //checks if the objects have the same number of keys
//  test: console.log(Object.keys(object1));
//   test: console.log(Object.keys(object2));   
 return false;
    
  } else {

    for (const keyName of Object.keys(object1)) {                               //We loop. It does not matter if it's through object1 or object2 because they have the same length
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) { //checks if the objects are arrays
        if(!eqObjects(object1[keyName], object2[keyName])) {                     //if not, returns false
          return false;
        }
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') { //checks if they are objects
        if(!eqObjects(object1[keyName], object2[keyName])) {
          return false;                                                           //if not, returns false
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {                          //checks if the objects key's name is the same
          return false;                                                         //if not, returns false
        }
      }
    } 
    return true;                                                              //returns true
  }
};

// const person1 = { name: "Manuel", age: "38", country: "Spain" };
// const person2 = { name: "Manuel", age: "38", country: "Spain" };
// console.log(eqObjects(person1, person2)); // true

// const person3 = { name: "Manuel", age: "38", country: "Spain" };
// const person4 = { name: "Manuel", age: "39", country: "Canada" };
// console.log(eqObjects(person3, person4)); // false

//ABOVE: Function eqObjects.js

//BELOW: Function assertObjectsEqual

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;            //We quickly realize while looking at the assertion messages that they print out objects as [object Object] which is not very descriptive and will not help with our debugging efforts.. As a workaround to this problem, we can modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it.
  let result = eqObjects(object1, object2)
  if (result === true) {
    console.log(`\uD83D\uDFE2 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`\uD83D\uDD34 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

const person1 = { name: "Manuel", age: "38", country: "Spain" };
const person2 = { name: "Manuel", age: "38", country: "Spain" };
assertObjectsEqual(person1, person2); //🟢 Assertion Passed: { name: 'Manuel', age: '38', country: 'Spain' } === { name: 'Manuel', age: '38', country: 'Spain' }

const person3 = { name: "Manuel", age: "38", country: "Spain" };
const person4 = { name: "Manuel", age: "39", country: "Canada" };
assertObjectsEqual(person3, person4); // 🔴 Assertion Failed: { name: 'Manuel', age: '38', country: 'Spain' } !== { name: 'Manuel', age: '39', country: 'Canada' }

module.exports = assertObjectsEqual;


//BELOW: A first try to assertObjectsEqual. But I did not connect it to eqObjects.

// const assertObjectsEqual = function(object1, object2) {

//   if (Object.keys(object1).length !== Object.keys(object2).length) {            //checks if the objects have the same number of keys  
//  return false;
    
//   } else {

//     for (const keyName of Object.keys(object1)) {                               //We loop. It does not matter if it's through object1 or object2 because they have the same length
//       if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) { //checks if the objects are arrays
//         if(!assertObjectsEqual(object1[keyName], object2[keyName])) {                     //if not, returns message
//           return `\uD83D\uDD34 Assertion Failed: both objects are not equal`;
//         }
//       } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') { //checks if they are objects
//         if(!assertObjectsEqual(object1[keyName], object2[keyName])) {
//           return `\uD83D\uDD34 Assertion Failed: both objects are not equal`;                  //if not, returns message
//         }
//       } else {
//         if (object1[keyName] !== object2[keyName]) {                          //checks if the objects key's name is the same
//           return `\uD83D\uDD34 Assertion Failed: both objects are not equal`;                      //if not, returns message
//         }
//       }
//     } 
//     return `\uD83D\uDFE2 Assertion Passed: both objects are equal`;             //returns message
//   }
// };