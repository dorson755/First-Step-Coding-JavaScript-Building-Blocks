/** Function Definitions **/

// This definition is here just as an example. No changes are necessary.
function square(x){
  return x * x;  
}

function smaller(x, y){
  // Your code goes between these two curly brackets!
  if (x<y){
    return x;
  }
  else{
    return y;
  }
  // if x is the smaller number (less than y), return x.
  
  // if y is the smaller number, return y.
}

function getFirst(array){
  // return the first item from the array
  return array[0];
}

function getLast(array){
  //returns the last item from the array
  return array[array.length-1];
}
/** Example Invocations **/

// Write two example invocations of each function here, and log the results.
var result = square(5);
console.log(result);

result = square(6);
console.log(result);

result = smaller(3,5);
console.log(result);

result = smaller(7,2);
console.log(result);

result = getFirst(array)
console.log(result)

result = getFirst(array)
console.log(result)

result = getLast(array)
console.log(result)

result = getLast(array)
console.log(result)
