const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns an empty array for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns true for eqArrays(middle([1, 2, 3, 4, 5]), [3])", () => {
    assert.deepEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
  });
  it("returns false for eqArrays(middle([1, 2, 3, 4, 5]), [1])", () => {
    assert.deepEqual(eqArrays(middle([1, 2, 3, 4, 5]), [1]), false);
  });
});

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// eqArrays(middle([1, 2, 3, 4, 5]), [3]); //true
// eqArrays(middle([1, 2, 3, 4, 5]), [1]); //false