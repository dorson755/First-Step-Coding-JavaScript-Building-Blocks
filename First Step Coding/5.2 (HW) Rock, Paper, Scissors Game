// Return 0 if there is a tie.
// Return 1 if player 1 wins.
// Return 2 if player 2 wins.
function battle(player1Choice, player2Choice){
   switch (player1Choice + player2Choice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        return 1;
      

      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        return 2;
      

      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        return 0;
      
    }
}

function randomComputerChoice(){
 const handSign = ["rock", "paper", "scissors"];
  let randomSign = handSign[Math.floor(Math.random() * handSign.length)];
  return randomSign;
}



/** Below here is code for the rest of the game. You do not 
    need to change it, but you should try to understand it. 
    
    If the prompts are interfering with your testing, you 
    should comment it out temporarily until your two
    functions above are working. **/
    
// This is just a helper function to both log and alert something at the same time.
function show(text){
  console.log(text);
  alert(text);
}

var player1Score = 0;
var computerScore = 0;
var answer, humanChoice, computerChoice, result, resultText;

// This is an infinite loop.
while(true){
  humanChoice = prompt('Rock, paper, or scissors?');
  computerChoice = randomComputerChoice();
  resultText = "Computer chose " + computerChoice + ". ";

  result = battle(humanChoice, computerChoice);
  
  if ( result === 0 ){
    show(resultText + 'Tie!')
  } else if ( result === 1 ){
    player1Score++;
    show(resultText + 'Player 1 wins!');
  } else {
    computerScore++;
    show(resultText + 'Computer wins!')
  }
  
  show("Human: " + player1Score + " | Computer: " + computerScore);
  answer = prompt("Want to play again?");
  
  if ( answer === null || answer.toLowerCase() !== 'yes' ){
    // Exit the loop
    break;
  }
}
