/** Object Basics **/

// Create an object that has firstName, 
// lastName, and occupation as properties/keys associated
// with your own values.
var person = {
  firstName:"Dorson", 
  lastName:"Williams", 
  occupation: "IT" 
}

// console.log each property's associated value from your 
// object once using both dot notation and bracket notation.
console.log(person.firstName)
console.log(person.lastName)
console.log(person.occupation)
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['occupation'])

// Add a property for "hobby" to your object and an associated
// hobby value of your own
person.hobby = "Studying";
console.log(person.hobby)
// What is the difference between dot 
// notation and bracket notation?
// ___ YOUR ANSWER HERE ___
// Fordot notation, I can use the variable name, 
// but for bracket notation, I use a string literal.
