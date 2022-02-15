const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // 🟢 Assertion Passed: both arrays are equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // 🔴 Assertion Failed: both arrays are not equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// 🟢 Assertion Passed: both arrays are equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // 🔴 Assertion Failed: both arrays are not equal
