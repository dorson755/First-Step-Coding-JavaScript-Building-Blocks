
function rockPaperScissors(){
    var value =Math.random();
    
    if (value > 0 && value < 0.3 ){
      return "rock";
    } else if (value > 0.3 && value < 0.6 ){
      return "paper";
      } else {
        return "scissors";
      } 
    
    }
    
    console.log(rockPaperScissors());
    console.log(rockPaperScissors());
    console.log(rockPaperScissors());
    console.log(rockPaperScissors());
    console.log(rockPaperScissors());
    
 
    var result = rockPaperScissors();
    console.log('Roll on ' + result);