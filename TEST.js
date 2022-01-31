const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDFE2 \uD83D\uDFE2 Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`\uD83D\uDD34 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}!`);
  }
};

//Aproach 1: trim
//Aproach 2: delete object key: empty

const countLetters = function(string) {
  const count = {};
	
	  for (let i = 0; i < string.length; i++) {  // Loop over the letters of the word
		  const letter = string[i];                 //Each letter is string [i]

    if (!count[letter]) { // The object hast not that letter. We create it assigning value of 1
			  count[letter] = 1;

			
		  } else { // Letter is already there. We increment +1
			count[letter]++;
		  }
	  }

	  return count;
};

console.log(countLetters("Hello")); //Should return an object { H: 1, e: 1, l: 2, o: 1 }
console.log(countLetters("Hi")); //Should return an object { H: 1, i: 1 }
console.log(countLetters("HI HI")); //Should return an object { H: 2, i: 2 } and no ""

//string.prototype.trim

//Test

const test = countLetters("Hello");
console.log(assertEqual(test["H"], 1));

//Not count spaces in string --> / /g,''