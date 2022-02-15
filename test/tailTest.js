const tail = require('../tail');
const assertEqual = require('../assertEqual');

//My answer
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), "Lighthouse,Labs");
//console.log(result.toString());

//The answer
// Instead of comparing arrays, a workaround to this limitation could be to compare the values of the returned tail array directly, like this:

const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"