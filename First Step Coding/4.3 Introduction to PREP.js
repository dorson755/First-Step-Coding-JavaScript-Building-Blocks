var wordList = prompt('Enter some words, separated by spaces:')
//just a check point
//console.log (wordList.length)

var wordArray = wordList.split(' ');
//just a checkpoint
//console.log (wordArray[0].length);



function totalLetters(par){
var lettersSoFar = 0;
  for (var i=0; i<par.length; i++){
    lettersSoFar += par[i].length
  }
  return lettersSoFar;
}

console.log(totalLetters(wordArray))
