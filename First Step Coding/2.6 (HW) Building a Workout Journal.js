/* IMPORTANT: We have added this starter code for you. You don't
   need to change anything up here. Your code will only go below 
   line 23. */

// DECLARE and DEFINE a new allWorkouts array. We'll use this
// this array to hold all of the workouts entered by the user.
var allWorkouts = [];

// We're goign to prompt the user to log 3 workouts, so we'll
// use a for loop that iterates 3 times.
for (var i=0; i<3; i++){
  // Create a workout object for this specific workout being logged.
  var thisWorkout = {};
  
  thisWorkout.day = prompt('Which day would you like to track? E.g. Monday')
  thisWorkout.hours = parseFloat(prompt('How many hours did you workout on ' + thisWorkout.day + '?'));
  
  // Now that we've created a single thisWorkout object, we're 
  // going to add it to our array of allWorkouts so it's tracked.
  allWorkouts.push(thisWorkout);
}

/* IMPORTANT: YOUR CODE GOES ONLY BELOW THIS LINE */

for (i=0; i<3; i++){
  console.log("You worked out for " + allWorkouts[i].hours + " hours on " + allWorkouts[i].day + '.')
}
