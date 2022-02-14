const head = require('../head');

console.log(head([5, 6, 7]));
console.log(head(["Hello", "Lighthouse", "Labs"]));
console.log(head(["oneElement"]));
console.log(head([]));

/*
I'm not sure about this. 
I made it work by having two "requires", one for head, on for assertEqual because my test code in head.js was:

// assertEqual(head([5,6,7]), 5);   //head is going to return 5, assertEqual is going to confirm = 5
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //head is going to return "Hello", assertEqual is going to confirm = "Hello"
// assertEqual(head(["oneElement"]), "oneElement");
// assertEqual(head([]),);

If I had two "exports", one for assertEqual, one for Head it worked. But classmates pointed out that I didn't need two "requires" or "exports". So I guessed it had to do with the way I was testing. So I changed it and now it works with only one export and one require. I'm wondering if it will continue to work as I require this code from other files.

*/