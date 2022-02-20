const head = function(array) { //Function head is going to return the 1st item of the array
  const firstItemArray = array[0];
  return firstItemArray;
};

module.exports = head;


// assertEqual(head([5,6,7]), 5);   //head is going to return 5, assertEqual is going to confirm = 5
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //head is going to return "Hello", assertEqual is going to confirm = "Hello"
// assertEqual(head(["oneElement"]), "oneElement");
// assertEqual(head([]),);

