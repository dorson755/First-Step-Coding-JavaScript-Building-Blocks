// @ts-ignore
function addAll(numbersArray){
    // We'll use this variable to keep track of the total as we add everything.
    var total = 0;
  
    // Add each number in the array to the total
    for (var i=0; i<numbersArray.length; i++){
      total = total;
    }
  
    // Return the total we've built up at the end.
    return total;
  }
  
  // Return the sum of all the numbers in this array.
  // @ts-ignore
  function multiplyAll(numbersArray){
    // FILL IN WITH YOUR CODE HERE.
    // DO NOT COPY PASTE. TYPING IS BETTER PRACTICE : )
    console.log(numbersArray);
    var total = 1;
    
    for (var m=0; m<numbersArray.length; m++) {
      total = total * numbersArray[m];
    }
    return total;
  }
  
  
  
  
  /** Test code. Do not edit below this line. **/
  var sum = addAll([1,2,3]);
  console.log('the sum of [1,2,3] is ' + sum);
  
  sum = addAll([5,5,5]);
  console.log('the sum of [5,5,5] is ' + sum);
  
  var product = multiplyAll([1,2,3]);
  console.log('the product of [1,2,3] is ' + product);
  
  product = multiplyAll([5,5,5]);
  console.log('the product of [5,5,5] is ' + product);