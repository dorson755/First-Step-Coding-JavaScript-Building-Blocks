var companies = [
  {name: "Apple", symbol: "APPL", sharePrice: "156.00"},
  {name: "Google", symbol: "GGL", sharePrice: "193.00"},
  {name: "Netflix", symbol: "NFLX", sharePrice: "47.00"},
  {name: "Facebook", symbol: "FB", sharePrice: "98.00"},
  {name: "Amazon", symbol: "AMZ", sharePrice: "45.00"}
]

console.log("The price of "+ companies[0].name +" is " + companies[0].sharePrice + ".")

console.log("The price of "+ companies[4]['name'] +" is " + companies[4]['sharePrice'] + ".")

for(i=0; i>=4; i++){
  console.log(i);
  console.log("The price of "+ companies[i].name +" is " + companies[i].sharePrice + ".")
}
