const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

eqArrays(middle([1, 2, 3, 4, 5]), [3]); //true
eqArrays(middle([1, 2, 3, 4, 5]), [1]); //false