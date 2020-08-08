var flips = prompt("How many times would you like to flip: ");
var heads = 0;

function flipSimulator(n){
  
  for (var i = 0; i<n; i++){
//  console.log (i);
  var det = Math.random ();
  if (det>0.5){
    heads += 1;
    //console.log(heads);
  }
  }
  return heads;
}
console.log(flipSimulator(flips));
