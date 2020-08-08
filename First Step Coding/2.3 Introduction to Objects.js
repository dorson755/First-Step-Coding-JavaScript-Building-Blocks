// 1. Initialize your object.

var myPerson = {
  firstName: 'Dorson',
  lastName: 'Williams',
  eyeColor: 'Dark Brown',
  bloodType: 'O'
} 
// Fill in the object here.

// 2. Practice reading properties.
console.log("This person\'s eye color is " + myPerson.eyeColor);
console.log('This person\'s last name is ' + myPerson.lastName)

// 3.Use bracket syntax with a variable
var propName = 'firstName';


// 4. Use bracket syntax for an update.
myPerson['eyeColor'] = 'hazel'

// 5. Use dot syntax for an update.
myPerson.lastName = 'Jingleheimer'

// PLEASE DO NOT ALTER BELOW THIS LINE. THIS IS CODE
// USED BY THE AUTOMATED TESTS.
console.log(myPerson)
