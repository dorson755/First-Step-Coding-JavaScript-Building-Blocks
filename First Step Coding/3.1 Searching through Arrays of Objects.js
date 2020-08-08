// IMPORTANT: do not change this array or any of the 
// objects within it. The tests rely on it.
var companies = [
  { name: 'Apple', symbol: 'APPL', sharePrice: 147.06 },
  { name: 'Tesla', symbol: 'TSLA', sharePrice: 316.83 },
  { name: 'Google', symbol: 'GOOG', sharePrice: 942.63 },
  { name: 'Facebook', symbol: 'FB', sharePrice: 149.64 }
]

// 1. Collect a searchString from the user.

// 2. Loop through the companies to see if you can find a match
var foundCompany = null;

// 3. If a match was found (or not found), log it as described on the right.
var searchString = prompt('Which company are you searching for?:')

for (var i=0; i<companies.length; i++){
  var currentCompany = companies[i];

  // Check if this contact's firstName matches our search

  if( currentCompany.name === searchString ){
    foundCompany = currentCompany;
    break;
  }
  
  if (currentCompany.symbol === searchString){
    foundCompany = currentCompany;
    break;
  }
  
}

if( foundCompany === null ){
  console.log('not found')
} else {
  console.log('The share price of ' + foundCompany.name + ' is ' + foundCompany.sharePrice + '.')
}

// TEST CODE: Do not edit below this line.
console.log('********** TEST CODE **********')
if( foundCompany === null ){
  console.log('not found')
} else {
  console.log('a match was found')
}
