# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @manucasanova/lotide`

**Require it:**

`const _ = require('@manucasanova/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Returns the first item of an array.
* `function2(tail)`: Returns a new array with the tail of an array.
* `function3(middle)`: Takes in an array and returns the middle-most element(s) of the given array.
* `function4(assertArraysEqual)`: Asserts that two arrays are equal.
* `function5(eqArrays)`: Compares two arrays for a perfect match.
* `function6(assertEqual)`: Compares two elements (primitive types).
* `function7(assertObjectsEqual)`: takes in two objects, compares them, and prints an appropriate message to the console.
* `function8(countLetters)`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence.
* `function9(countOnly)`: Given an array and an object, returns an object containing counts of everything that the input object listed.
* `function10(eqObjects)`: takes in two objects and returns true or false, based on a perfect match.
* `function11(findKey)`: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. 
* `function12(findKeyByValue)`: searches for a key on an object where its value matches a given value.
* `function13(flatten)`: Flattens to a single array an array with other arrays inside
* `function14(letterPositions)`: returns all the indices (zero-based positions) in the string where each character is found.
* `function15(map)`: returns a new array based on the results of the callback function.
* `function16(takeUntil)`: collects items from a provided array until the callback provided returns a truthy value.
* `function17(without)`: Filters data removing unwanted unwanted items