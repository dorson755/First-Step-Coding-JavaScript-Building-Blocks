function randomFrom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Return a random integer between 20-100, inclusive.
// HINT: there is a formula here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function random20to100(){
 return randomFrom(20, 100);
}
//checkpoint
console.log(random20to100())
  

// Return a random integer between 100-1000, inclusive
function random100to1000(){
  return randomFrom(100, 1000);
}
//checkpoint
console.log(random100to1000())

// Return a random letter of the alphabet

function randomAlphabetLetter(){
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      // YOUR CODE HERE
      randomIndex = randomFrom (0, letters.length - 1);
      return letters[randomIndex]
}
console.log(randomAlphabetLetter())

// This function accepts an array of animals like ['tiger', 'lion', 'dog']
// The animalArray argument is allowed to be any length, and the function 
// should always return a random animal from the array. For example, 
// it might return 'lion' from the above array.
//
// HINT: remember how you can check how many items are in an array? 
var animals = ['dog', 'cat', 'mouse', 'politician']

function randomAnimal(animalArray){
  // YOUR CODE HERE
      randomIndex = randomFrom (0, animalArray.length - 1);
      return animalArray[randomIndex]
}
console.log(randomAnimal(animals))

// Needle in the haystack
var inputString = prompt('Get your haystack, little doggie!:')
var haystack = inputString.split(' ')

function findNeedle(stack){
  
  for ( var i = 0; i<stack.length; i++){
    if (haystack[i] == 'needle'){
      console.log ('I found the needle at index ' + i + '.' );
      break;
    }
  }
  return i+1;
}
console.log(findNeedle(haystack))
