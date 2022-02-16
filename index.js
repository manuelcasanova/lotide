const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head,//:   head,         //shortening thanks to advances on ES6
  tail,//:   tail,
  middle,//: middle,
  assertArraysEqual,//: assertArraysEqual,
  assertEqual,//: assertEqual,
  assertObjectsEqual,//: assertObjectsEqual,
  countLetters,//: countLetters,
  countOnly,//: countOnly,
  eqArrays,//: eqArrays,
  eqObjects,//: eqObjects,
  findKey,//: findKey,
  findKeyByValue,//: findKeyByValue,
  flatten,//: flatten,
  letterPositions,//: letterPositions,
  map,//: map
  takeUntil,
  without

};

//To test this I opened NODE from the terminal and entered const = require('./index')