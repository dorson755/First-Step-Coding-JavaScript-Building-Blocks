// @ts-ignore
function battle(player1Choice, player2Choice){
    // Takeing care of the tie scenario up front.
    if (player1Choice === player2Choice){
      return 0
    }
    
    if (player1Choice === 'rock'){
      if (player2Choice === 'scissors'){
        return 1;
      } else {
        return 2;
      }
    } else if (player1Choice === 'paper'){
      if (player2Choice === 'rock'){
        return 1;
      } else {
        return 2;
      }
    } else { // player1choice === 'scissors'
      if (player2Choice === 'paper'){
        return 1;
      } else {
        return 2;
      }
    }
  }
  
  function randomComputerChoice(){
    var choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
  }