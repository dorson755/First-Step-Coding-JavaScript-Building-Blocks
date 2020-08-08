// Example
function flipCoin(){
  var value = Math.random();
  
  if (value < 0.5){
    return "heads";
  } else {
    return "tails";
  }
}


// YOUR rockPaperScissors() FUNCTION GOES HERE
function rockPaperScissors(){
  var valueRPS = Math.random();
  
  if (valueRPS <= 0.33){
    return "rock"
  } else {
    if (valueRPS > 0.33 && valueRPS <= 0.66){
      return "paper"
    } else {
      if (valueRPS > 0.66){
        return "scissors"
      }
    }
  }
}

// YOUR TEST INVOCATIONS GO HERE

console.log('CPU selected: ' + rockPaperScissors() + '.')
console.log('CPU selected: ' + rockPaperScissors() + '.')
console.log('CPU selected: ' + rockPaperScissors() + '.')
console.log('CPU selected: ' + rockPaperScissors() + '.')
console.log('CPU selected: ' + rockPaperScissors() + '.')
console.log('CPU selected: ' + rockPaperScissors() + '.')

/** Test code. Do not modify below this line **/
var result = flipCoin();
console.log('The coin landed on ' + result);
