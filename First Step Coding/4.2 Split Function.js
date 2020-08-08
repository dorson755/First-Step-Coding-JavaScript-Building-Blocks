/** Example section. IMPORTANT: you must comment out this section before running the tests.
var inputString = prompt('What groceries do you need to buy?')

var groceries = inputString.split(', ')

console.log('Ok, so you need these ' + groceries.length + ' items: ');

for (var i=0; i<groceries.length; i++){
  console.log('- ' + groceries[i]);
  
  if(groceries[i] === 'peanut butter'){
    console.log('(MMM, excellent choice by the way)')
  }
}**/
/** End of the example section. Your solution goes below. **/
var inputString = prompt('Get your haystack, little doggie!:')
var haystack = inputString.split(' ')

for (var i=0; i<haystack.length; i++){
  if (haystack[i] === 'needle'){
    console.log('I found the needle at index: '+ i + '.')
  }
}
