// Your code goes below here.

var answer = prompt('How many inches will it rain this week?');


answer = Number(answer);


if (answer < 0){

  console.log('That is just not possible, my friend.')

} 

else if (answer === 0){

  console.log("I hope we're not in a drought.")

}
else if (answer > 0 && answer <= 4){
  console.log('I should really buy a raincoat.')
}
else {

  console.log('I should really buy a boat.')
}
