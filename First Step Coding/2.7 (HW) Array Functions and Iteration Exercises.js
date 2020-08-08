/** 2. ARRAY METHODS **/

// IMPORTANT: These exercises are cumulative, so make sure you
// to run your code and verify it's working before moving to the
// next exercise.

// Complete the following, starting from the following array: 
var arr = ["JavaScript", "Python", "Ruby", "Java"];

// Use the slice function to convert arr into the following: 
// ["Python", "Ruby"].
arr = arr.slice(1,3)

// Verify that arr now contains ["Python", "Ruby"] by logging it
console.log(arr)

// Use the concat function to combine arr with ["Haskell", "Clojure"], 
// so arr will become: ["Python", "Ruby", "Haskell", "Clojure"]
var arr2 = ["Haskell", "Clojure"]

arr = arr.concat(arr2)

// Use the join function on your array to log the string:
// "Python, Ruby, Haskell, Clojure"
console.log(arr.join(", "))

/** ARRAY ITERATION **/

// For each of the exercises below, assume you are starting with the
// following people array.
var people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
for (var i=0; i>=3; i++){
  console.log(people[i])
}
// Write the command to remove "Greg" from the array.
people.shift();
console.log(people)

// Write the command to remove "James" from the array.
people.pop(people.length);
console.log(people)

// Write the command to add "Matt" to the front of the array.
people.unshift("Matt")
console.log(people)

// Write the command to add your name to the end of the array.
people.push("Dorson");
console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (i=0; i>=3; i++){
  console.log(people[i])
  if(people === "Mary"){
    i=4
  }
}
// Write the command that gives the indexOf where "Mary" is located.
(people.indexOf ["Mary"]);

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
people.indexOf ["Foo"];

// Re-assign the people variable to the original value of: 
// ["Greg", "Mary", "Devon", "James"];
people = ["Greg", "Mary", "Devon", "James"];
console.log(people)

// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
// Your array should look like this when you are done:
// ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(2,1, "Elizabeth", "Artie")
console.log(people)
//people = people.splice(0, 2,  "Elizabeth", "Artie")
//console.log(people)
