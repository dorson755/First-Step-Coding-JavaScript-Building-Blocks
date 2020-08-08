var companies = [
    {name: 'apple', symbol: 'aAPL', sharePrice: '$352.84'},
    {name: 'berkshireHathaway', symbol: 'bRKA', sharePrice: '$287,200.00'},
    {name: 'exxonMobile', symbol: 'xOM', sharePrice: '$50.56'},
    {name: 'alphabetInc', symbol: 'gOOG.MX', sharePrice: '$31,966.99'},
    {name: 'johnson&Johnson', symbol: 'jNJ', sharePrice: '$147.80'}
    ];
  console.log('The price of '+ 'apple ' + 'is ' + '$353');
  
  for (var i=0; i<companies.length; i++){
  
    var otherCompany = companies[0];
  
    console.log('I am interested in ' + otherCompany.name + '. What is the  ' + otherCompany.sharePrice + '...if I may ask? ');
  
  } if ('otherCompany'){
    // @ts-ignore
    otherCompany.otherC = ['otherC'] + i ;
  }else {
  
  var otherCompany = {name: 'otherC', symbol: 'OCSymbol', sharePrice: 'IPO'};
  companies.push(otherCompany);
  console.log('The price of ' + ['otherC'], 'is ' + 'IPO');
  }